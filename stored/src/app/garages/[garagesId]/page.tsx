// ./garages/{garagesId} route content
export interface GarageDetailsProps {
  params: { garagesId: string }; // has to be exactly garagesId because has to be the same as [folder] name
}

export default function GarageDetails({ params }: GarageDetailsProps) {
  return <h1>Garage details {params.garagesId}</h1>;
}
