import {
  Calendar,
  Clock,
  MapPin,
  Ticket,
  Award,
  Users,
} from "lucide-react";
// Note: Link was unused and removed to fix lint warnings

const details = [
  {
    icon: Calendar,
    title: "Date",
    value: "02 August 2026",
  },
  {
    icon: Clock,
    title: "Time",
    value: "10:00 AM – 1:00 PM",
  },
  {
    icon: MapPin,
    title: "Venue",
    value: "SDLC, Namakkal",
  },
  {
    icon: Ticket,
    title: "Registration Fee",
    value: "FREE",
  },
  {
    icon: Award,
    title: "Certificate",
    value: "Free E-Certificate",
  },
  {
    icon: Users,
    title: "Eligibility",
    value: "Students & Beginners",
  },
];

export default function Details() {
  return (
    <section aria-labelledby="details-heading">
      <h2 id="details-heading" className="sr-only">Event details</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {details.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.title} className="flex items-start gap-3">
              <Icon className="h-6 w-6" aria-hidden />
              <div>
                <p className="text-sm font-medium">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.value}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}