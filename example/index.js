// Dependencies
var IsSsh = require("../lib");

// Secure Shell Transport Protocol (SSH)
console.log(IsSsh("ssh://user@host.xz:port/path/to/repo.git/"));
// => true

console.log(IsSsh("ssh://user@host.xz/path/to/repo.git/"));
// => true

console.log(IsSsh("ssh://host.xz:port/path/to/repo.git/"));
// => true

console.log(IsSsh("ssh://host.xz/path/to/repo.git/"));
// => true

console.log(IsSsh("ssh://user@host.xz/path/to/repo.git/"));
// => true

console.log(IsSsh("ssh://host.xz/path/to/repo.git/"));
// => true

console.log(IsSsh("ssh://user@host.xz/~user/path/to/repo.git/"));
// => true

console.log(IsSsh("ssh://host.xz/~user/path/to/repo.git/"));
// => true

console.log(IsSsh("ssh://user@host.xz/~/path/to/repo.git"));
// => true

console.log(IsSsh("ssh://host.xz/~/path/to/repo.git"));
// => true


console.log(IsSsh("user@host.xz:/path/to/repo.git/"));
// => true

console.log(IsSsh("user@host.xz:~user/path/to/repo.git/"));
// => true

console.log(IsSsh("user@host.xz:path/to/repo.git"));
// => true


console.log(IsSsh("host.xz:/path/to/repo.git/"));
// => true

console.log(IsSsh("host.xz:path/to/repo.git"));
// => true

console.log(IsSsh("host.xz:~user/path/to/repo.git/"));
// => true


console.log(IsSsh("rsync://host.xz/path/to/repo.git/"));
// => true


// Git Transport Protocol
console.log(IsSsh("git://host.xz/path/to/repo.git/"));
// => false

console.log(IsSsh("git://host.xz/~user/path/to/repo.git/"));
// => false

// HTTP/S Transport Protocol
console.log(IsSsh("http://host.xz/path/to/repo.git/"));
// => false

console.log(IsSsh("https://host.xz/path/to/repo.git/"));
// => false

// Local (Filesystem) Transport Protocol
console.log(IsSsh("/path/to/repo.git/"));
// => false

console.log(IsSsh("path/to/repo.git/"));
// => false

console.log(IsSsh("~/path/to/repo.git"));
// => false

console.log(IsSsh("file:///path/to/repo.git/"));
// => false

console.log(IsSsh("file://~/path/to/repo.git/"));
// => false
