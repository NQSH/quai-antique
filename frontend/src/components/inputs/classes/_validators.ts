import { BookingDateValidator } from "./BookingDateValidator";
import { EmailValidator } from "./EmailValidator";
import { NameValidator } from "./NameValidator";
import { NotEmptyValidator } from "./NotEmptyValidator";
import { SentenceValidator } from "./SentenceValidator";

export const Validators = {
    Name: () => new NameValidator(),
    Booking: () => new BookingDateValidator(),
    Sentence: () => new SentenceValidator(),
    Email: () => new EmailValidator(),
    NotEmpty: () => new NotEmptyValidator(),
}