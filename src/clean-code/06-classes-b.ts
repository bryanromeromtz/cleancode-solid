// NO APLICANDO EL PRINSIPIO DE RESPONSABILIDAD UNICA

(() => {
  type Gender = "M" | "F";

  interface PersonProps {
    name: string;
    gender: Gender;
    birthDate: Date;
  }

  class Person {
    public name: string;
    public gender: Gender;
    public birthDate: Date;

    constructor({ name, gender, birthDate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthDate = birthDate;
    }
  }

  interface UserProps {
    email: string;
    role: string;
    lastAccess: Date;
    name: string;
    gender: Gender;
    birthDate: Date;
  }

  class User extends Person {
    public email: string;
    public role: string;
    public lastAccess: Date;

    constructor({
      name,
      gender,
      birthDate,
      email,
      role,
      lastAccess,
    }: UserProps) {
      super({ name, gender, birthDate });
      this.email = email;
      this.role = role;
      this.lastAccess = lastAccess;
    }

    checkCredentials(): Boolean {
      return true;
    }
  }

  interface UserSettingsProps {
    email: string;
    role: string;
    name: string;
    gender: Gender;
    birthDate: Date;
    lastAccess: Date;
    workingDirectory: string;
    lastOpenFolder: string;
  }

  class UserSettings extends User {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({
      email,
      role,
      name,
      gender,
      birthDate,
      lastAccess,
      workingDirectory,
      lastOpenFolder,
    }: UserSettingsProps) {
      super({ name, gender, birthDate, email, role, lastAccess });
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  const userSettings = new UserSettings({
    email: "envkt@example.com",
    role: "Admin",
    name: "John Doe",
    gender: "M",
    birthDate: new Date(),
    lastAccess: new Date(),
    workingDirectory: "/usr/home",
    lastOpenFolder: "/home",
  });

  console.log("User Settings", userSettings);
})();
