import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { username: string };
}): Promise<Metadata> {
  const uname = params.username;

  try {
    const res = await fetch(`https://api.github.com/users/${uname}`, {
      // Revalida a cada 1h para não ultrapassar rate limit facilmente
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error('Failed to fetch user');

    const data = (await res.json()) as {
      name?: string;
      login?: string;
      bio?: string;
      avatar_url?: string;
      html_url?: string;
    };

    const displayName = data.name || data.login || uname;
    const description = data.bio || `Portfólio de ${displayName} no GitHub`;

    return {
      title: `${displayName} | Portfólio`,
      description,
      alternates: {
        canonical: `/${uname}`,
      },
      openGraph: {
        type: 'profile',
        title: `${displayName} | Portfólio`,
        description,
        url: `/${uname}`,
        images: data.avatar_url
          ? [
              {
                url: data.avatar_url,
                alt: displayName,
              },
            ]
          : undefined,
      },
      twitter: {
        card: 'summary_large_image',
        title: `${displayName} | Portfólio`,
        description,
        images: data.avatar_url ? [data.avatar_url] : undefined,
      },
    };
  } catch {
    return {
      title: `${uname} | Portfólio`,
      description: `Portfólio de ${uname} no GitHub`,
    };
  }
}

export default function UsernameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>; // layout simples apenas para habilitar generateMetadata no segmento
}
