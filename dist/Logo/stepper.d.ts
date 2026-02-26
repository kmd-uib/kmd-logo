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
declare const stepper: (x: number, v: number, destX: number, { k, b, others, ki, krandom, fcap }: StepperParams) => StepperResult;
export default stepper;
