const parseEnv = () => {
  console.log(
    Object.entries(process.env)
      .filter(([key, _]) => key.includes("RSS_"))
      .map(([key, value]) => [key, value].join("="))
      .join("; ")
  );
};

parseEnv();
