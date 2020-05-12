interface FileSystem {
  readFile: (path: string, format: string, callback: Function) => {};
}

class FS_Proxy {
  private fs: FileSystem;

  constructor(fs_subject: FileSystem) {
    this.fs = fs_subject;
  }

  readFile(path: string, format: string, callback: Function) {
    if (!path.match(/.md$|.MD$/)) {
      return callback(new Error("Can only read Markdown files."));
    }

    this.fs.readFile(path, format, (error: any, contents: any) => {
      if (error) {
        console.log(error);
        return callback(error);
      }

      return callback(null, contents);
    });
  }

  /* implement all methods ...*/
}

export default FS_Proxy;
