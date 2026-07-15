import Image from "next/image";
import { clientLogos } from "@/lib/portfolio-data";
import { assetPath } from "@/lib/asset-path";

export function ClientLogos() {
  return (
    <div>
      <p className="text-sm text-muted-foreground">
        <span className="font-[family-name:var(--font-accent)] italic text-foreground">
          Clients
        </span>{" "}
        we have worked with
      </p>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {clientLogos.map((client) => (
          <div
            key={client.name}
            className="flex h-20 items-center justify-center rounded-xl border border-border/70 bg-card px-4"
          >
            {client.logo ? (
              <Image
                src={assetPath(client.logo)}
                alt={client.name}
                width={120}
                height={40}
                className="max-h-10 w-auto object-contain opacity-80 grayscale transition-opacity hover:opacity-100 hover:grayscale-0"
              />
            ) : (
              <span className="text-center text-xs text-foreground/60">
                {client.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
