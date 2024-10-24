import { BookingDateValidator } from "./BookingDateValidator";
import { NameValidator } from "./NameValidator";
import { SentenceValidator } from "./SentenceValidator";

export const Validators = {
    Name: () => new NameValidator(),
    Booking: () => new BookingDateValidator(),
    Sentence: () => new SentenceValidator(),
}