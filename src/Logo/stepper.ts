const secondsPerFrame = 1 / 60;
const precision = 2;

export interface StepperParams {
    k: number;
    b: number;
    others: number[];
    ki: number;
    krandom: number;
    fcap: number;
    width?: number;
}

export interface StepperResult {
    newX: number;
    newV: number;
    done: boolean;
}

const sum = (arr: number[]): number => arr.reduce((acc, curr) => acc + curr, 0);

const stepper = (x: number, v: number, destX: number, { k, b, others, ki, krandom, fcap }: StepperParams): StepperResult => {
    const Fspring = -k * (x - destX);
    const Fdamper = -b * v;
    const Finteraction = sum(others.map(pos => (Math.sign(x - pos) * ki) / Math.max(Math.pow(x - pos, 2), 0.00000000001)));

    const sumDistances = sum(others.map(pos => Math.abs(x - pos)));
    const Frandom = (Math.random() - 0.5) * krandom / Math.max(Math.pow(sumDistances, 2), 0.0000000000001);

    const F = Fspring + Fdamper + Finteraction + Frandom;

    const Fcapped = Math.sign(F) * Math.min(Math.abs(F), fcap);
    const a = Fcapped;

    const newV = v + a * secondsPerFrame;
    const newX = x + newV * secondsPerFrame;

    if (Math.abs(newV) < precision && Math.abs(newX - destX) < precision) {
        return { newX: destX, newV: 0, done: true };
    }

    return { newX, newV, done: false };
};

export default stepper;
