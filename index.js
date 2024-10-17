import { launchNuvoImporter } from 'nuvo-vanilla-js'

launchNuvoImporter('.nuvo-importer', {
  licenseKey: "Your License Key",
  settings: {
    developerMode: true,
    identifier: "product_data",
    columns: [
      {
        label: "Product ID",
        key: "product_id",
      },
      {
        label: "Article Name",
        key: "article_name",
      },
    ],
  }
});
