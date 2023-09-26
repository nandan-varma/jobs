
## Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `pnpm install`          | Installs dependencies                              |
| `pnpm run dev`          | Starts local dev server at `localhost:3000`        |
| `pnpm run build`        | Build your production site to `./dist/`            |
| `pnpm run preview`      | Preview your build locally, before deploying       |
| `pnpm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `pnpm run astro --help` | Get help using the Astro CLI                       |

## db impl. for future for now :

locations:
id : uuid
name : string
(optional)
lat : float
long : float

users:
id : uuid
name : string

employees:
id : uuid
name : string
location : foreign key to locations
rating : float
ph_no : number

filters :
location
rating