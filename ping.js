window.onload = () => {
  setTimeout(
    () =>
      fetch("https://farooqkz.de1.hashbang.sh/ping", {
        method: "POST",
        body: window.location,
      }),
    5000
  );
};
