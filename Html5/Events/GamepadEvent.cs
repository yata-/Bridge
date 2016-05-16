using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Bridge.Html5
{
    [External]
    [Name(false)]
    public class GamepadEvent : Event
    {
        public readonly Gamepad gamepad;
    }
}
