declare module 'wu' {
    declare type DeepIterable<U> = Iterable<U | DeepIterable<U>>;
    declare type Flat<T> = $Call<<U>(Iterable<U> | U) => U, T>;
    declare type DeepFlat<T> = $Call<<U>(DeepIterable<U> | U) => U, T>;

    declare export default class Wu<T> {
        // Implicit implement `Iterable<T>`.
        @@iterator(): Iterator<T>;

        static <T>(Iterable<T>): Wu<T>;

        static values<T: Object>(T): Wu<$Values<T>>;

        tap(T => mixed): Wu<T>;

        map<U>(T => U): Wu<U>;

        filter(): Wu<$NonMaybeType<T>>;
        filter(T => boolean): Wu<T>;

        flatten(): Wu<DeepFlat<T>>;
        flatten(true): Wu<DeepFlat<T>>;
        flatten(false): Wu<Flat<T>>;

        find(T => boolean): T | void;

        pluck<K: $Keys<T>>(K): Wu<$ElementType<T, K>>;

        some(): boolean;
        some(T => boolean): boolean;

        forEach(T => mixed): void;

        toArray(): T[];
    }
}
