using Bridge;

using System.ComponentModel;


namespace System.Threading
{
    /// <summary>
    /// Represents the method that handles calls from a Timer.
    /// </summary>
    /// <param name="state">An object containing application-specific information relevant to the method invoked by this delegate, or null.</param>
    /// <remarks>
    /// Use a TimerCallback delegate to specify the method that is called by a Timer.
    /// This method does not execute in the thread that created the timer;
    /// it executes in a separate thread pool thread that is provided by the system.
    /// The TimerCallback delegate invokes the method once after the start time elapses,
    /// and continues to invoke it once per timer interval until the Dispose method is called,
    /// or until the Timer.Change method is called with the interval value Infinite.
    /// The timer delegate is specified when the timer is constructed, and cannot be changed.
    /// The start time for a Timer is passed in the dueTime parameter of the Timer constructors, and the period is passed in the period parameter.
    /// For an example that demonstrates creating and using a TimerCallback delegate, see System.Threading.Timer.
    /// </remarks>
    public delegate void TimerCallback(Object state);

    /// <summary>
    /// Provides a mechanism for executing a method at specified intervals. This class cannot be inherited.
    /// </summary>
    [External]
    [Namespace("Bridge.Threading")]
    public sealed class Timer : IDisposable
    {
        /// <summary>
        /// Initializes a new instance of the Timer class, using a 32-bit signed integer to specify the time interval.
        /// </summary>
        /// <param name="callback">A TimerCallback delegate representing a method to be executed.</param>
        /// <param name="state">An object containing information to be used by the callback method, or null.</param>
        /// <param name="dueTime">The amount of time to delay before callback is invoked, in milliseconds. Specify Timeout.Infinite to prevent the timer from starting. Specify zero (0) to start the timer immediately.</param>
        /// <param name="period">The time interval between invocations of callback, in milliseconds. Specify Timeout.Infinite to disable periodic signaling.</param>
        /// <remarks>
        /// The delegate specified by the callback parameter is invoked once after dueTime elapses, and thereafter each time the period time interval elapses.
        /// If dueTime is zero (0), callback is invoked immediately.If dueTime is Timeout.Infinite, callback is not invoked; the timer is disabled, but can be re-enabled by calling the Change method.
        /// Because the Timer class has the same resolution as the system clock, which is approximately 15 milliseconds on Windows 7 and Windows 8 systems, the callback delegate executes at intervals defined by the resolution of the system clock if period is less than the resolution of the system clock. If period is zero (0) or Timeout.Infinite and dueTime is not Timeout.Infinite, callback is invoked once; the periodic behavior of the timer is disabled, but can be re-enabled using the Change method.
        /// The method specified for callback should be reentrant, because it is called on ThreadPool threads. The method can be executed simultaneously on two thread pool threads if the timer interval is less than the time required to execute the method, or if all thread pool threads are in use and the method is queued multiple times.
        /// </remarks>
        [Template("new Bridge.Threading.Timer(\"constructor$1\", {callback}, {state}, {dueTime}, {period})")]
        public extern Timer(TimerCallback callback, Object state, int dueTime, int period);

        /// <summary>
        /// Initializes a new instance of the Timer class, using a 32-bit signed integer to specify the time interval.
        /// </summary>
        /// <param name="callback">A TimerCallback delegate representing a method to be executed.</param>
        /// <param name="state">An object containing information to be used by the callback method, or null.</param>
        /// <param name="dueTime">The amount of time to delay before callback is invoked, in milliseconds. Specify Timeout.Infinite to prevent the timer from starting. Specify zero (0) to start the timer immediately.</param>
        /// <param name="period">The time interval between invocations of callback, in milliseconds. Specify Timeout.Infinite to disable periodic signaling.</param>
        /// <remarks>
        /// The callback method is invoked once after dueTime elapses, and thereafter each time the time interval specified by period elapses.
        /// If dueTime is zero(0), the callback method is invoked immediately.If dueTime is Timeout.Infinite, the callback method is never invoked; the timer is disabled, but can be re-enabled by calling Change and specifying a positive value for dueTime.
        /// If period is zero(0) or Timeout.Infinite, and dueTime is not Timeout.Infinite, the callback method is invoked once; the periodic behavior of the timer is disabled, but can be re-enabled by calling Change and specifying a positive value for period.
        /// The Change method can be called from the TimerCallback delegate.
        /// </remarks>
        [Template("new Bridge.Threading.Timer(\"constructor$3\", {callback}, {state}, {dueTime}, {period})")]
        public extern Timer(TimerCallback callback, Object state, TimeSpan dueTime, TimeSpan period);


        /// <summary>
        /// Initializes a new instance of the Timer class, using 32-bit unsigned integers to measure time intervals.
        /// </summary>
        /// <param name="callback">A TimerCallback delegate representing a method to be executed.</param>
        /// <param name="state">An object containing information to be used by the callback method, or null.</param>
        /// <param name="dueTime">The amount of time to delay before callback is invoked, in milliseconds. Specify Timeout.Infinite to prevent the timer from starting. Specify zero (0) to start the timer immediately.</param>
        /// <param name="period">The time interval between invocations of callback, in milliseconds. Specify Timeout.Infinite to disable periodic signaling.</param>
        /// <remarks>
        /// The delegate specified by the callback parameter is invoked once after dueTime elapses, and thereafter each time the period time interval elapses.
        /// If dueTime is zero(0), callback is invoked immediately.If dueTime is Timeout.Infinite, callback is not invoked; the timer is disabled, but can be re-enabled by calling the Change method.
        /// Because the Timer class has the same resolution as the system clock, which is approximately 15 milliseconds on Windows 7 and Windows 8 systems, the callback delegate executes at intervals defined by the resolution of the system clock if period is less than the resolution of the system clock. If period is zero (0) or Timeout.Infinite and dueTime is not Timeout.Infinite, callback is invoked once; the periodic behavior of the timer is disabled, but can be re-enabled using the Change method.
        /// The method specified for callback should be reentrant, because it is called on ThreadPool threads. The method can be executed simultaneously on two thread pool threads if the timer interval is less than the time required to execute the method, or if all thread pool threads are in use and the method is queued multiple times.
        /// </remarks>
        [Template("new Bridge.Threading.Timer(\"constructor$4\", {callback}, {state}, {dueTime}, {period})")]
        public extern Timer(TimerCallback callback, Object state, UInt32 dueTime, UInt32 period);

        /// <summary>
        /// Initializes a new instance of the Timer class, using 64-bit signed integers to measure time intervals.
        /// </summary>
        /// <param name="callback">A TimerCallback delegate representing a method to be executed.</param>
        /// <param name="state">An object containing information to be used by the callback method, or null.</param>
        /// <param name="dueTime">The amount of time to delay before callback is invoked, in milliseconds. Specify Timeout.Infinite to prevent the timer from starting. Specify zero (0) to start the timer immediately.</param>
        /// <param name="period">The time interval between invocations of callback, in milliseconds. Specify Timeout.Infinite to disable periodic signaling.</param>
        /// <remarks>
        /// The delegate specified by the callback parameter is invoked once after dueTime elapses, and thereafter each time the period time interval elapses.
        /// If dueTime is zero(0), callback is invoked immediately.If dueTime is Timeout.Infinite, callback is not invoked; the timer is disabled, but can be re-enabled by calling the Change method.
        /// Because the Timer class has the same resolution as the system clock, which is approximately 15 milliseconds on Windows 7 and Windows 8 systems, the callback delegate executes at intervals defined by the resolution of the system clock if period is less than the resolution of the system clock. If period is zero (0) or Timeout.Infinite and dueTime is not Timeout.Infinite, callback is invoked once; the periodic behavior of the timer is disabled, but can be re-enabled using the Change method.
        /// The method specified for callback should be reentrant, because it is called on ThreadPool threads. The method can be executed simultaneously on two thread pool threads if the timer interval is less than the time required to execute the method, or if all thread pool threads are in use and the method is queued multiple times.
        /// </remarks>
        [Template("new Bridge.Threading.Timer(\"constructor$2\", {callback}, {state}, {dueTime}, {period})")]
        public extern Timer(TimerCallback callback, Object state, long dueTime, long period);

        /// <summary>
        /// Initializes a new instance of the Timer class with an infinite period and an infinite due time, using the newly created Timer object as the state object.
        /// </summary>
        /// <param name="callback">A TimerCallback delegate representing a method to be executed.</param>
        /// <remarks>
        /// Call this constructor when you want to use the Timer object itself as the state object. After creating the timer, use the Change method to set the interval and due time.
        /// This constructor specifies an infinite due time before the first callback and an infinite interval between callbacks, in order to prevent the first callback from occurring before the Timer object is assigned to the state object.
        /// The method specified for callback should be reentrant, because it is called on ThreadPool threads. The method can be executed simultaneously on two thread pool threads if the timer interval is less than the time required to execute the method, or if all thread pool threads are in use and the method is queued multiple times.
        /// </remarks>
        [Template("new Bridge.Threading.Timer(\"constructor\", {callback}, {state}, {dueTime}, {period})")]
        public extern Timer(TimerCallback callback);

        /// <summary>
        /// Changes the start time and the interval between method invocations for a timer, using 32-bit signed integers to measure time intervals.
        /// </summary>
        /// <param name="dueTime">The amount of time to delay before the invoking the callback method specified when the Timer was constructed, in milliseconds. Specify Timeout.Infinite to prevent the timer from restarting. Specify zero (0) to restart the timer immediately.</param>
        /// <param name="period">The time interval between invocations of the callback method specified when the Timer was constructed, in milliseconds. Specify Timeout.Infinite to disable periodic signaling.</param>
        /// <returns>true if the timer was successfully updated; otherwise, false.</returns>
        public extern bool Change(int dueTime, int period);

        /// <summary>
        /// Changes the start time and the interval between method invocations for a timer, using TimeSpan values to measure time intervals.
        /// </summary>
        /// <param name="dueTime">A TimeSpan representing the amount of time to delay before invoking the callback method specified when the Timer was constructed. Specify negative one (-1) milliseconds to prevent the timer from restarting. Specify zero (0) to restart the timer immediately.</param>
        /// <param name="period">The time interval between invocations of the callback method specified when the Timer was constructed. Specify negative one (-1) milliseconds to disable periodic signaling.</param>
        /// <returns>true if the timer was successfully updated; otherwise, false.</returns>
        [Name("change$2")]
        public extern bool Change(TimeSpan dueTime, TimeSpan period);

        /// <summary>
        /// Changes the start time and the interval between method invocations for a timer, using 32-bit unsigned integers to measure time intervals.
        /// </summary>
        /// <param name="dueTime">The amount of time to delay before the invoking the callback method specified when the Timer was constructed, in milliseconds. Specify Timeout.Infinite to prevent the timer from restarting. Specify zero (0) to restart the timer immediately.</param>
        /// <param name="period">The time interval between invocations of the callback method specified when the Timer was constructed, in milliseconds. Specify Timeout.Infinite to disable periodic signaling.</param>
        /// <returns>true if the timer was successfully updated; otherwise, false.</returns>
        [Name("change$3")]
        public extern bool Change(UInt32 dueTime, UInt32 period);

        /// <summary>
        /// Changes the start time and the interval between method invocations for a timer, using 64-bit signed integers to measure time intervals.
        /// </summary>
        /// <param name="dueTime">The amount of time to delay before the invoking the callback method specified when the Timer was constructed, in milliseconds. Specify Timeout.Infinite to prevent the timer from restarting. Specify zero (0) to restart the timer immediately.</param>
        /// <param name="period">The time interval between invocations of the callback method specified when the Timer was constructed, in milliseconds. Specify Timeout.Infinite to disable periodic signaling.</param>
        /// <returns>true if the timer was successfully updated; otherwise, false.</returns>
        [Name("change$1")]
        public extern bool Change(long dueTime, long period);

        /// <summary>
        /// Releases all resources used by the current instance of Timer.
        /// Callbacks will not be called after Timer is disposed
        /// </summary>
        public extern void Dispose();
    }
}