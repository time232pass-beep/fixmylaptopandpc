import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { GalleryItem } from "@shared/schema";

import heroImage from "@assets/generated_images/Professional_laptop_repair_workspace_hero_b157a959.png";
import laptopRepair from "@assets/generated_images/Laptop_repair_service_close-up_29e3670d.png";
import pcRepair from "@assets/generated_images/PC_desktop_repair_service_67fdfe34.png";
import mobileRepair from "@assets/generated_images/Mobile_phone_repair_service_75cffbac.png";
import shopExterior from "@assets/generated_images/Repair_shop_exterior_storefront_31c05880.png";
import shopInterior from "@assets/generated_images/Repair_shop_interior_workspace_789dda39.png";
import beforeAfter from "@assets/generated_images/Laptop_before_after_repair_34859cf1.png";
import customerDelivery from "@assets/generated_images/Customer_laptop_delivery_satisfaction_c9d093cb.png";
import toolsWorkstation from "@assets/generated_images/Organized_repair_tools_workstation_3e3b288b.png";
import motherboardDiagnostic from "@assets/generated_images/Motherboard_diagnostic_testing_work_3a2ea36e.png";
import dataRecovery from "@assets/generated_images/Professional_data_recovery_service_546c50fc.png";
import repairedDevices from "@assets/generated_images/Repaired_devices_ready_pickup_e26e0d54.png";
import keyboardReplacement from "@assets/generated_images/Laptop_keyboard_replacement_repair_764b6b6c.png";
import gamingPC from "@assets/generated_images/Gaming_PC_upgrade_service_07faf2b8.png";
import mobilebatterey from "@assets/generated_images/Smartphone_battery_replacement_work_57b0d257.png";

const defaultGallery: GalleryItem[] = [
  { id: "1", image: heroImage, title: "Professional Workspace", category: "Shop Interior", description: "Our well-equipped repair workspace" },
  { id: "2", image: laptopRepair, title: "Laptop Motherboard Repair", category: "Repair Work", description: "Precision laptop repair work" },
  { id: "3", image: pcRepair, title: "Desktop PC Component Installation", category: "Repair Work", description: "PC hardware upgrade service" },
  { id: "4", image: mobileRepair, title: "Mobile Screen Replacement", category: "Repair Work", description: "Professional mobile repair" },
  { id: "5", image: shopExterior, title: "Our Shop", category: "Shop Interior", description: "Visit us in Yewalewadi, Pune" },
  { id: "6", image: shopInterior, title: "Clean Work Environment", category: "Shop Interior", description: "Organized and professional workspace" },
  { id: "7", image: beforeAfter, title: "Before & After Repair", category: "Before/After", description: "Quality repair transformation" },
  { id: "8", image: customerDelivery, title: "Happy Customer", category: "Before/After", description: "Satisfied customer receiving repaired laptop" },
  { id: "9", image: toolsWorkstation, title: "Professional Tools", category: "Shop Interior", description: "State-of-the-art repair equipment" },
  { id: "10", image: motherboardDiagnostic, title: "Diagnostic Testing", category: "Repair Work", description: "Thorough motherboard diagnostics" },
  { id: "11", image: dataRecovery, title: "Data Recovery Service", category: "Repair Work", description: "Professional data recovery" },
  { id: "12", image: repairedDevices, title: "Quality Control", category: "Repair Work", description: "Devices ready for pickup" },
  { id: "13", image: keyboardReplacement, title: "Keyboard Replacement", category: "Repair Work", description: "Laptop keyboard repair service" },
  { id: "14", image: gamingPC, title: "Gaming PC Upgrade", category: "Repair Work", description: "Custom gaming PC builds" },
  { id: "15", image: mobilebatterey, title: "Phone Battery Service", category: "Repair Work", description: "Mobile battery replacement" },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const { data: galleryItems } = useQuery<GalleryItem[]>({
    queryKey: ["/api/gallery"],
  });

  const items = galleryItems && galleryItems.length > 0 ? galleryItems : defaultGallery;

  const categories = ["all", ...Array.from(new Set(items.map(item => item.category)))];

  const filteredItems = selectedCategory === "all"
    ? items
    : items.filter(item => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <section className="bg-gradient-to-r from-primary to-primary/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">
            Our Work Gallery
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            See our professional repair work, satisfied customers, and state-of-the-art workspace
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">Before & After</div>
            <div className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">Repair Work</div>
            <div className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">Customer Satisfaction</div>
            <div className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">Professional Tools</div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="capitalize"
                data-testid={`button-category-${category.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredItems.map((item, index) => (
              <Card
                key={item.id}
                className="break-inside-avoid overflow-hidden cursor-pointer hover-elevate transition-all"
                onClick={() => openLightbox(index)}
                data-testid={`card-gallery-${item.id}`}
              >
                <div className="relative aspect-auto">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      {item.description && (
                        <p className="text-sm text-white/90">{item.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 text-white hover:bg-white/10 rounded-md transition-colors"
            data-testid="button-close-lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 p-2 text-white hover:bg-white/10 rounded-md transition-colors"
            data-testid="button-prev-image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 p-2 text-white hover:bg-white/10 rounded-md transition-colors"
            data-testid="button-next-image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="max-w-6xl max-h-[90vh] px-16">
            <img
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].title}
              className="max-w-full max-h-[90vh] object-contain"
            />
            <div className="text-center mt-4 text-white">
              <h3 className="text-xl font-semibold mb-1">{filteredItems[lightboxIndex].title}</h3>
              {filteredItems[lightboxIndex].description && (
                <p className="text-white/80">{filteredItems[lightboxIndex].description}</p>
              )}
              <p className="text-sm text-white/60 mt-2">
                {lightboxIndex + 1} / {filteredItems.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
