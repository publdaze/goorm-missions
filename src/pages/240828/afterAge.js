function ageAfterNYears(age, n) {
  return age + n;
}

function calculateAge(birthday, type) {
  const birth = new Date(birthday);
  const today = new Date();

  let age = today.getFullYear() - birth.getFullYear();

  switch (type) {
    case "만나이": {
      if (
        today.getMonth() < birth.getMonth() ||
        (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate())
      ) {
        age--;
      }

      return age;
    }
    case "세는나이": {
      return age + 1;
    }
  }
}

const birthday = "2001-03-31";
console.log(calculateAge(birthday, "만나이"));
console.log(calculateAge(birthday, "세는나이"));
