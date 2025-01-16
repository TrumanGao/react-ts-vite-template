import child_process from 'child_process';

child_process.exec(
  `cross-env __DEVELOPER__=${process.argv[2]} vite --config vite/vite.development.ts`,
  (error, stdout, stderr) => {
    if (error) {
      console.error('exec error: ', error);
      return;
    }
  },
);
