export const SystemTimeGreeting = () => {
  const currentTime: Date = new Date(Date.now());
  const classString =
    "transition-all max-md:flex max-md:justify-center max-md:my-2 max-md:col-start-2 \
    max-md:col-end-7 min-md:col-start-7 min-md:col-end-16";
  const tod: number = currentTime.getHours();
  if (tod < 12) {
    return <h3 className={classString}>{"Good morning!"}</h3>;
  } else if (tod < 16) {
    return <h3 className={classString}>{"Good afternoon!"}</h3>;
  } else {
    return <h3 className={classString}>{"Good Evening!"}</h3>;
  }
};
