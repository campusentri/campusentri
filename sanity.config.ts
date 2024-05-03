import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'CampusEntri',

  projectId: '5g2g36ih',
  dataset: 'production',
  token: 'skjyYfhqwVK8FQF8Yhz6ymRB1iFwxd7wKDEzfvan2jchZVQKN68gMnoUFnCgOCKHsvWtWz5X2ZOr9LAoMtlIo63e1mh0dMYuDuHRn8o86BsgMySeW8Kh1OrVLrYINGctZ6sqOqvempSjTto7XmZUEDpZr9PDHg5muyFgmoHPMawHkKGMCQAd',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
