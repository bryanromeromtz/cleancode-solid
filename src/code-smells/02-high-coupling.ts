(() => {
  // No aplicando el principio de responsabilidad única
  type Gender = "M" | "F";

  // Alto Acoplamiento

  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ) {}
  }

  class User {
    constructor(
      public email: string,
      public role: string,
      private lastAccess: Date
    ) {
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class Settings {
    constructor(
      public workingDirectory: string,
      public lastFolderOpen: string
    ) {}
  }

  class UserSettings {
    public settings: Settings;
    public user: User;
    public person: Person;

    constructor(
      workingDirectory: string,
      lastFolderOpen: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      this.settings = new Settings(workingDirectory, lastFolderOpen);
      this.user = new User(email, role, new Date());
      this.person = new Person(name, gender, birthdate);
    }
  }

  const userSettings = new UserSettings(
    "/urs/home",
    "/development",
    "fernando@google.com",
    "F",
    "Fernando",
    "M",
    new Date("1985-10-21")
  );

  console.log({
    userSettings,
    credentials: userSettings.user.checkCredentials(),
  });
})();
