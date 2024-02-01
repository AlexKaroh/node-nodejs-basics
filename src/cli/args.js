const parseArgs = () => {
  console.log(
    process.argv
      .slice(2)
      .reduce((acc, curr, i, arr) => {
        i % 2 === 0 && acc.push(`${curr.slice(2)} is ${arr[i + 1]}`);
        return acc;
      }, [])
      .join(", ")
  );
};

parseArgs();
