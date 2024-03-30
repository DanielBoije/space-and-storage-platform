export interface ReviewDetailsProps {
  params: { garagesId: string; reviewId: string };
}

export default function GarageDetails({ params }: ReviewDetailsProps) {
  return (
    <h1>
      Review {params.reviewId} for garage {params.garagesId}
    </h1>
  );
}
