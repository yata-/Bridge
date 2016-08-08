using Bridge;

using System;

namespace Transpiled.System.Threading
{
    public delegate void TimerCallback(Object state);

    [Namespace("System.Threading")]
    public sealed class Timer : IDisposable
    {
        private const UInt32 MAX_SUPPORTED_TIMEOUT = (uint)0xfffffffe;
        private const string EXC_LESS = "Number must be either non-negative and less than or equal to Int32.MaxValue or -1.";
        private const string EXC_MORE = "Time-out interval must be less than 2^32-2.";
        private const string EXC_DISPOSED = "The timer has been already disposed.";

        //
        // Timeout.UnsignedInfinite if we are not going to fire
        //
        internal long dueTime;

        //
        // Timeout.UnsignedInfinite if we are a single-shot timer.  Otherwise, the repeat interval.
        //
        internal long period;

        private TimerCallback timerCallback;
        private Object state;
        private int? id;
        private bool disposed;

        public Timer(TimerCallback callback, Object state, int dueTime, int period)
        {
            TimerSetup(callback, state, dueTime, period);
        }

        public Timer(TimerCallback callback, Object state, TimeSpan dueTime, TimeSpan period)
        {
            var dueTm = (long)dueTime.TotalMilliseconds;
            var periodTm = (long)period.TotalMilliseconds;

            TimerSetup(callback, state, dueTm, periodTm);
        }

        public Timer(TimerCallback callback, Object state, UInt32 dueTime, UInt32 period)
        {
            TimerSetup(callback, state, dueTime, period);
        }

        public Timer(TimerCallback callback, Object state, long dueTime, long period)
        {
            TimerSetup(callback, state, dueTime, period);
        }

        public Timer(TimerCallback callback)
        {
            int dueTime = -1;    // we want timer to be registered, but not activated.  Requires caller to call
            int period = -1;    // Change after a timer instance is created.  This is to avoid the potential
                                // for a timer to be fired before the returned value is assigned to the variable,
                                // potentially causing the callback to reference a bogus value (if passing the timer to the callback).

            TimerSetup(callback, this, dueTime, period);
        }

        private bool TimerSetup(TimerCallback callback, Object state, long dueTime, long period)
        {
            if (this.disposed)
            {
                throw new InvalidOperationException(EXC_DISPOSED);
            }

            if (callback == null)
                throw new ArgumentNullException("TimerCallback");

            if (dueTime < -1)
                throw new ArgumentOutOfRangeException("dueTime", EXC_LESS);
            if (period < -1)
                throw new ArgumentOutOfRangeException("period", EXC_LESS);
            if (dueTime > MAX_SUPPORTED_TIMEOUT)
                throw new ArgumentOutOfRangeException("dueTime", EXC_MORE);
            if (period > MAX_SUPPORTED_TIMEOUT)
                throw new ArgumentOutOfRangeException("period", EXC_MORE);

            this.dueTime = dueTime;
            this.period = period;

            this.state = state;
            this.timerCallback = callback;

            return this.RunTimer(this.dueTime);
        }

        private void HandleCallback()
        {
            if (this.disposed)
            {
                return;
            }

            if (this.timerCallback != null)
            {
                var myId = this.id;
                this.timerCallback(this.state);

                // timerCallback may call Change(). To prevent double call we can check if timer changed
                if (this.id == myId)
                {
                    this.RunTimer(this.period, false);
                }
            }
        }

        private bool RunTimer(long period, bool checkDispose = true)
        {
            if (checkDispose && this.disposed)
            {
                throw new InvalidOperationException(EXC_DISPOSED);
            }

            if (period != -1 && !this.disposed)
            {
                var p = Script.Write<int>("{period}.toNumber();", period);
                this.id = Bridge.Html5.Global.SetTimeout(this.HandleCallback, p);
                return true;
            }

            return false;
        }

        public bool Change(int dueTime, int period)
        {
            return ChangeTimer(dueTime, period);
        }

        public bool Change(TimeSpan dueTime, TimeSpan period)
        {
            return ChangeTimer((long)dueTime.TotalMilliseconds, (long)period.TotalMilliseconds);
        }

        public bool Change(UInt32 dueTime, UInt32 period)
        {
            return ChangeTimer(dueTime, period);
        }

        public bool Change(long dueTime, long period)
        {
            return ChangeTimer(dueTime, period);
        }

        private bool ChangeTimer(long dueTime, long period)
        {
            ClearTimeout();
            return TimerSetup(this.timerCallback, this.state, dueTime, period);
        }

        private void ClearTimeout()
        {
            if (this.id.HasValue)
            {
                Bridge.Html5.Window.ClearTimeout(this.id.Value);
                this.id = null;
            }
        }

        public void Dispose()
        {
            this.ClearTimeout();
            this.disposed = true;
        }
    }
}