import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";
import ReviewSection from "@/components/property/ReviewSection";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;

  if (Array.isArray(id) || !id) return <p>Loading...</p>;

  const property = PROPERTYLISTINGSAMPLE.find((item) => item.id === parseInt(id));

  if (!property) return <p>Property not found</p>;

  return (
    <div className="container mx-auto p-6">
      <PropertyDetail property={property} />
      <div className="flex flex-col md:flex-row gap-6 mt-6">
        <div className="flex-1">
          <ReviewSection reviews={property.reviews || []} />
        </div>
        <div className="w-full md:w-1/3">
          <BookingSection price={property.price} />
        </div>
      </div>
    </div>
  );
}
