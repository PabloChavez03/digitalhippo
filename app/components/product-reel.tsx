import Link from "next/link";

interface ProductReelProps {
  title: string;
  subtitle?: string;
  href?: string;
}

export function ProductReel(props: ProductReelProps) {
  const { title, subtitle, href } = props;
  return (
    <section className="py-12">
      <div className="md:flex md:items-center md:justify-between mb-4">
        <div className="max-w-2xl px-4 lg:max-w-4xl lg:px-0">
          {title ? (
            <h1 className="text-2xl font-bold text-gray-900 xm:text-3xl">
              {title}
            </h1>
          ) : null}

          {subtitle ? (
            <p className="mt-2 text-sm text-muted-foreground">{title}</p>
          ) : null}
        </div>

        {href ? (
          <Link href={href} className="hidden text-sm font-medium text-blue-600 hover:text-blue-500 md:block">
            Shop the collection <span aria-hidden="true">&rarr;</span>
          </Link>
        ) : null}
      </div>
    </section>
  );
}
