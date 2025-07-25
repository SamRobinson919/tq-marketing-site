import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  name: "My Website",
  stackbitVersion: "~0.5.0",

  // Define your models here (moved out of contentSources)
  models: [
    {
      name: "Page",
      type: "page",
      urlPath: "/{slug}",
      filePath: "content/pages/{slug}.json",
      fields: [
        { name: "title", type: "string", required: true },
        { name: "slug", type: "string", required: true },
        { name: "body", type: "markdown" } // editable content area
      ]
    }
  ],

  // Git content source configuration
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content"]
      // removed models from here
    })
  ]
});
