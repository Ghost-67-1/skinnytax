export default function FormProgressStepper({ formNumber = 0, step = 0 }) {
    const progress = [1, 2, 3]
    return (
        <div className="form-progress-stepper">
            <strong>Progress</strong>
            <div className="progress-bar-wrapper">
                <span>{+formNumber + 1} of {step} steps completed</span>
                <div className="progress-bars">
                    {progress.map((item) => (
                        <span className={`progress-bar ${item <= formNumber ? 'active' : ''}`}></span>
                    ))}
                </div>
            </div>
        </div>
    )
}