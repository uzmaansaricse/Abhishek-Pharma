import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = "Abhishek Pharma - Trusted Wholesale Distributor of Medicines",
  description = "Abhishek Pharma is a trusted wholesale distributor of allopathic, Ayurvedic, and veterinary medicines. Serving healthcare businesses across India since 2003 with genuine products and reliable supply.",
  keywords = "pharmaceutical distributor, wholesale medicines, allopathic medicines, Ayurvedic products, veterinary medicines, pharma supplier India, medical supplies, Abhishek Pharma",
  canonical = "https://abhishekpharma.in",
  ogTitle,
  ogDescription,
  ogImage = "https://abhishekpharma.in/images/bannerimg.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  twitterTitle,
  twitterDescription,
  twitterImage,
  structuredData
}) => {
  const fullTitle = title.includes("Abhishek Pharma") ? title : `${title} | Abhishek Pharma`;
  const finalOgTitle = ogTitle || fullTitle;
  const finalOgDescription = ogDescription || description;
  const finalTwitterTitle = twitterTitle || finalOgTitle;
  const finalTwitterDescription = twitterDescription || finalOgDescription;
  const finalTwitterImage = twitterImage || ogImage;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Abhishek Pharma" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={finalTwitterTitle} />
      <meta name="twitter:description" content={finalTwitterDescription} />
      <meta name="twitter:image" content={finalTwitterImage} />

      {/* Additional SEO Meta Tags for Pharma Website */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="author" content="Abhishek Pharma" />
      <meta name="publisher" content="Abhishek Pharma" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="IN-RJ" />
      <meta name="geo.placename" content="Nokha, Rajasthan, India" />
      <meta name="geo.position" content="27.5842;73.4731" />
      <meta name="ICBM" content="27.5842, 73.4731" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
