const char = ['|   ', '/   ', '-   ', '\\   ', '|   ', '/   ', '-   ', '\\   ', '|   ', '\n'];

const spinner = function(array) {
  let timer = 100;
  array.forEach(
    char => setTimeout(() => {
      process.stdout.write('\r' + char);
    }, timer += 200)
  );
};

spinner(char);