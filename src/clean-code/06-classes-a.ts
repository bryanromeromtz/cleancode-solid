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

  // const newUser = new User(
  //   "Byan",
  //   "M",
  //   new Date("1992-11-01"),
  //   "mail@mail.com",
  //   "Admin",
  //   new Date()
  // );

  // console.log(newUser);
})();
