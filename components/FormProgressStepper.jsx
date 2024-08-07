export default function FormProgressStepper() {
    return (
        <div className="form-progress-stepper">
            <strong>Progress</strong>
            <div className="progress-bar-wrapper">
                <span>1 of 3 steps completed</span>
                <div className="progress-bars">
                    <span className="progress-bar active"></span>
                    <span className="progress-bar"></span>
                    <span className="progress-bar"></span>
                </div>
            </div>
        </div>
    )
}