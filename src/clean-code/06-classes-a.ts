// NO APLICANDO EL PRINSIPIO DE RESPONSABILIDAD UNICA

(() => {
  type Gender = "M" | "F";

  class Person {
    public name: string;
    public gender: Gender;
    public birthDate: Date;

    constructor(name: string, gender: Gender, birthDate: Date) {
      this.name = name;
      this.gender = gender;
      this.birthDate = birthDate;
    }
  }

  class User extends Person {
    public email: string;
    public role: string;
    public lastAccess: Date;

    constructor(
      name: string,
      gender: Gender,
      birthDate: Date,
      email: string,
      role: string,
      lastAccess: Date
    ) {
      super(name, gender, birthDate);
      this.email = email;
      this.role = role;
      this.lastAccess = lastAccess;
    }

    checkCredentials(): Boolean {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthDate: Date,
      lastAccess: Date
    ) {
      super(name, gender, birthDate, email, role, lastAccess);
    }
  }

  const userSettings = new UserSettings(
    "/usr/home",
    "/home",
    "envkt@example.com",
    "Admin",
    "John Doe",
    "M",
    new Date(),
    new Date()
  );

  console.log(userSettings);
})();
