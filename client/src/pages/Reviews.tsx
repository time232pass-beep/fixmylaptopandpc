import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Star, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { insertReviewSchema } from "@shared/schema";
import { apiRequest, queryClient } from "@/lib/queryClient";
import type { Review, InsertReview } from "@shared/schema";

export default function Reviews() {
  const { toast } = useToast();
  const [filterRating, setFilterRating] = useState<string>("all");
  const [filterService, setFilterService] = useState<string>("all");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { data: reviews, isLoading } = useQuery<Review[]>({
    queryKey: ["/api/reviews"],
  });

  const form = useForm<InsertReview>({
    resolver: zodResolver(insertReviewSchema),
    defaultValues: {
      customerName: "",
      rating: 5,
      comment: "",
      serviceType: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertReview) => {
      return await apiRequest("POST", "/api/reviews", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/reviews"] });
      setIsDialogOpen(false);
      form.reset();
      toast({
        title: "Review Submitted!",
        description: "Thank you for your feedback.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit review. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertReview) => {
    mutation.mutate(data);
  };

  const filteredReviews = reviews?.filter((review) => {
    const ratingMatch = filterRating === "all" || review.rating === parseInt(filterRating);
    const serviceMatch = filterService === "all" || review.serviceType === filterService;
    return ratingMatch && serviceMatch;
  }) || [];

  const averageRating = reviews && reviews.length > 0
    ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
    : 0;

  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => ({
    rating,
    count: reviews?.filter(r => r.rating === rating).length || 0,
    percentage: reviews && reviews.length > 0
      ? ((reviews.filter(r => r.rating === rating).length / reviews.length) * 100)
      : 0,
  }));

  return (
    <div className="min-h-screen flex flex-col">
      <section className="bg-gradient-to-r from-primary to-primary/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">
            Customer Reviews
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            See what our satisfied customers have to say about our services
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card className="lg:col-span-1">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-foreground mb-2">
                    {averageRating.toFixed(1)}
                  </div>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.round(averageRating)
                            ? "fill-chart-3 text-chart-3"
                            : "text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm mb-6">
                    Based on {reviews?.length || 0} reviews
                  </p>
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <Button className="w-full" data-testid="button-write-review">
                        Write a Review
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Write a Review</DialogTitle>
                      </DialogHeader>
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                          <FormField
                            control={form.control}
                            name="customerName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Your Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="John Doe" {...field} data-testid="input-review-name" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="rating"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Rating</FormLabel>
                                <Select
                                  onValueChange={(value) => field.onChange(parseInt(value))}
                                  defaultValue={field.value.toString()}
                                >
                                  <FormControl>
                                    <SelectTrigger data-testid="select-review-rating">
                                      <SelectValue />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="5">5 Stars - Excellent</SelectItem>
                                    <SelectItem value="4">4 Stars - Very Good</SelectItem>
                                    <SelectItem value="3">3 Stars - Good</SelectItem>
                                    <SelectItem value="2">2 Stars - Fair</SelectItem>
                                    <SelectItem value="1">1 Star - Poor</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="serviceType"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Service Type</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger data-testid="select-review-service">
                                      <SelectValue placeholder="Select service type" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="Laptop Repair">Laptop Repair</SelectItem>
                                    <SelectItem value="PC Repair">PC Repair</SelectItem>
                                    <SelectItem value="Mobile Repair">Mobile Repair</SelectItem>
                                    <SelectItem value="Data Recovery">Data Recovery</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="comment"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Your Review</FormLabel>
                                <FormControl>
                                  <Textarea
                                    placeholder="Tell us about your experience..."
                                    className="min-h-24 resize-none"
                                    {...field}
                                    data-testid="input-review-comment"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <Button
                            type="submit"
                            className="w-full"
                            disabled={mutation.isPending}
                            data-testid="button-submit-review"
                          >
                            {mutation.isPending ? "Submitting..." : "Submit Review"}
                          </Button>
                        </form>
                      </Form>
                    </DialogContent>
                  </Dialog>
                </div>

                <div className="mt-6 space-y-2">
                  {ratingDistribution.map(({ rating, count, percentage }) => (
                    <div key={rating} className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground w-8">{rating}★</span>
                      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-chart-3 transition-all"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground w-8">{count}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="lg:col-span-2">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <h2 className="text-2xl font-bold text-foreground">All Reviews</h2>
                <div className="flex items-center gap-2 flex-wrap">
                  <Select value={filterRating} onValueChange={setFilterRating}>
                    <SelectTrigger className="w-40" data-testid="select-filter-rating">
                      <SelectValue placeholder="Filter by rating" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Ratings</SelectItem>
                      <SelectItem value="5">5 Stars</SelectItem>
                      <SelectItem value="4">4 Stars</SelectItem>
                      <SelectItem value="3">3 Stars</SelectItem>
                      <SelectItem value="2">2 Stars</SelectItem>
                      <SelectItem value="1">1 Star</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={filterService} onValueChange={setFilterService}>
                    <SelectTrigger className="w-40" data-testid="select-filter-service">
                      <SelectValue placeholder="Filter by service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Services</SelectItem>
                      <SelectItem value="Laptop Repair">Laptop Repair</SelectItem>
                      <SelectItem value="PC Repair">PC Repair</SelectItem>
                      <SelectItem value="Mobile Repair">Mobile Repair</SelectItem>
                      <SelectItem value="Data Recovery">Data Recovery</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {isLoading ? (
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <Card key={i}>
                      <CardContent className="p-6">
                        <div className="animate-pulse space-y-3">
                          <div className="h-4 bg-muted rounded w-1/4" />
                          <div className="h-4 bg-muted rounded w-full" />
                          <div className="h-4 bg-muted rounded w-3/4" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : filteredReviews.length === 0 ? (
                <Card>
                  <CardContent className="p-12 text-center">
                    <Filter className="w-12 h-12 text-muted mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">No Reviews Found</h3>
                    <p className="text-muted-foreground">
                      {reviews && reviews.length > 0
                        ? "Try adjusting your filters"
                        : "Be the first to leave a review!"}
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-4">
                  {filteredReviews.map((review) => (
                    <Card key={review.id} className="hover-elevate transition-shadow" data-testid={`card-review-${review.id}`}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-semibold text-foreground">{review.customerName}</h3>
                            <p className="text-xs text-muted-foreground">
                              {new Date(review.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                              })}
                            </p>
                          </div>
                          <div className="flex items-center gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < review.rating
                                    ? "fill-chart-3 text-chart-3"
                                    : "text-muted"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-3">{review.comment}</p>
                        <div className="inline-block px-3 py-1 bg-secondary rounded-md">
                          <span className="text-xs font-medium text-secondary-foreground">
                            {review.serviceType}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
