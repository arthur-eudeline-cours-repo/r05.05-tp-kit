import fs from 'fs';
import path from 'path';
import {glob} from "glob";

const PREFIX = 'kit-';

const rootDir = path.resolve(import.meta.dirname, '..', 'src');
const classNameRegex = /className=["']([\w\s-]+)["']/g;

glob("**/*.{js,jsx,tsx}", {cwd: rootDir}).then((files) => {
  files.forEach((file) => {
    const filePath = path.join(rootDir, file);
    fs.readFile(filePath, 'utf-8', (err, data) => {
      console.log(` - ${filePath}`);
      if (err) {
        console.error(err);
        return;
      }
      const result = data.replace(classNameRegex, (match, p1) => {
        const classNames = p1.split(" ");
        const prefixedClassNames = classNames.map((className: string) => {
          if (className.startsWith(PREFIX)) {
            return className;
          } else {
            return `${PREFIX}${className}`;
          }
        });
        return `className="${prefixedClassNames.join(" ")}"`;
      });
      fs.writeFile(filePath, result, 'utf-8', (err) => {
        if (err) console.error(err);
      });
    });
  });
});