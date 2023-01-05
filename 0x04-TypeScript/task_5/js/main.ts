interface MajorCredits {
    credits: number;
    readonly brand: any;
}

interface MinorCredits {
    credits: number;
    readonly brand: any;
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    const value = subject1.credits + subject2.credits;
    return { credits: value } as MajorCredits;
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    const value = subject1.credits + subject2.credits;
    return { credits: value } as MinorCredits;
}
