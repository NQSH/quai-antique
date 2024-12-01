import type { Ref } from "vue";
import { AddressValidator } from "./AddressValidator";
import { BookingDateValidator } from "./BookingDateValidator";
import { EmailValidator } from "./EmailValidator";
import { NameValidator } from "./NameValidator";
import { NotEmptyValidator } from "./NotEmptyValidator";
import { PasswordConfirmValidator } from "./PasswordConfirmValidator";
import { PasswordValidator } from "./PasswordValidator";
import { SentenceValidator } from "./SentenceValidator";
import { ZipCodeValidator } from "./ZipCodeValidator";

export const Validators = {
    Name: () => new NameValidator(),
    Booking: () => new BookingDateValidator(),
    Sentence: () => new SentenceValidator(),
    Email: () => new EmailValidator(),
    Address: () => new AddressValidator(),
    ZipCode: () => new ZipCodeValidator(),
    Password: () => new PasswordValidator(),
    PasswordConfirm: (password: Ref) => new PasswordConfirmValidator(password),
    NotEmpty: () => new NotEmptyValidator(),
}