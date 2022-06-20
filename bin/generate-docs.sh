#!/usr/bin/env sh

./node_modules/.bin/tplant --input crc/agreements/**/*.ts --associations --format mermaid > docs/agreements.markdown
./node_modules/.bin/tplant --input crc/invoicing/**/*.ts --associations --format mermaid > docs/invoicing.markdown
./node_modules/.bin/tplant --input crc/fms/**/*.ts --associations --format mermaid > docs/fms.markdown
./node_modules/.bin/tplant --input crc/scoot-scoot/**/*.ts --associations --format mermaid > docs/scoot-scoot.markdown
