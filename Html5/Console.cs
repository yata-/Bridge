// Console WebAPI by Mozilla Contributors is licensed under CC-BY-SA 2.5.
// https://developer.mozilla.org/en-US/docs/Web/API/Console

using System;

namespace Bridge.Html5
{
    /// <summary>
    /// The console object provides access to the browser's debugging console (e.g. the Web Console in Firefox).
    /// The specifics of how it works vary from browser to browser, but there is a de facto set of features that are typically provided.
    /// </summary>
    [External]
    public static class Console
    {
        #region Log

        /// <summary>
        /// Outputs a message to the Web Console.
        /// </summary>
        /// <param name="value">Object to output.</param>
        public static extern void Log(string value);

        /// <summary>
        /// Outputs a message to the Web Console.
        /// </summary>
        /// <param name="value">Object to output.</param>
        [Template("console.log(Bridge.Enum.toString({value:type}, {value}))")]
        public static extern void Log(Enum value);

        /// <summary>
        /// Outputs a message to the Web Console.
        /// </summary>
        /// <param name="value">Object to output.</param>
        [Template("console.log(String.fromCharCode({value}))")]
        public static extern void Log(char value);

        /// <summary>
        /// Outputs a message to the Web Console.
        /// </summary>
        /// <param name="value">Object to output.</param>
        [Template("console.log({value}.toString())")]
        public static extern void Log(decimal value);

        /// <summary>
        /// Outputs a message to the Web Console.
        /// </summary>
        /// <param name="value">Object to output.</param>
        [Template("console.log({value} && {value}.toString())")]
        public static extern void Log(decimal? value);

        /// <summary>
        /// Outputs a message to the Web Console.
        /// </summary>
        /// <param name="msg">A JavaScript string containing zero or more substitution strings.</param>
        /// <param name="args">JavaScript objects with which to replace substitution strings within msg. This gives you additional control over the format of the output.</param>
        public static extern void Log(string msg, params object[] args);

        /// <summary>
        /// Outputs a message to the Web Console.
        /// </summary>
        /// <param name="args">JavaScript objects with which to replace substitution strings within msg. This gives you additional control over the format of the output.</param>
        public static extern void Log(params object[] args);

        #endregion Log

        #region Info

        /// <summary>
        /// Outputs an informational message to the Web Console. In Firefox, a small "i" icon is displayed next to these items in the Web Console's log.
        /// </summary>
        /// <param name="msg">A JavaScript string containing zero or more substitution strings.</param>
        public static extern void Info(string msg);

        /// <summary>
        /// Outputs an informational message to the Web Console. In Firefox, a small "i" icon is displayed next to these items in the Web Console's log.
        /// </summary>
        /// <param name="value">Object to output.</param>
        [Template("console.info(Bridge.Enum.toString({value:type}, {value}))")]
        public static extern void Info(Enum value);

        /// <summary>
        /// Outputs an informational message to the Web Console. In Firefox, a small "i" icon is displayed next to these items in the Web Console's log.
        /// </summary>
        /// <param name="value">Object to output.</param>
        [Template("console.info(String.fromCharCode({value}))")]
        public static extern void Info(char value);

        /// <summary>
        /// Outputs an informational message to the Web Console. In Firefox, a small "i" icon is displayed next to these items in the Web Console's log.
        /// </summary>
        /// <param name="value">Object to output.</param>
        [Template("console.info({value}.toString())")]
        public static extern void Info(decimal value);

        /// <summary>
        /// Outputs an informational message to the Web Console. In Firefox, a small "i" icon is displayed next to these items in the Web Console's log.
        /// </summary>
        /// <param name="value">Object to output.</param>
        [Template("console.info({value} && {value}.toString())")]
        public static extern void Info(decimal? value);

        /// <summary>
        /// Outputs an informational message to the Web Console. In Firefox, a small "i" icon is displayed next to these items in the Web Console's log.
        /// </summary>
        /// <param name="msg">A JavaScript string containing zero or more substitution strings.</param>
        /// <param name="args">JavaScript objects with which to replace substitution strings within msg. This gives you additional control over the format of the output.</param>
        public static extern void Info(string msg, params object[] args);

        /// <summary>
        /// Outputs an informational message to the Web Console. In Firefox, a small "i" icon is displayed next to these items in the Web Console's log.
        /// </summary>
        /// <param name="args">JavaScript objects with which to replace substitution strings within msg. This gives you additional control over the format of the output.</param>
        public static extern void Info(params object[] args);

        #endregion Info

        #region Warn

        /// <summary>
        /// Outputs a warning message to the Web Console.
        /// </summary>
        /// <param name="msg">A JavaScript string containing zero or more substitution strings.</param>
        public static extern void Warn(string msg);

        /// <summary>
        /// Outputs a warning message to the Web Console.
        /// </summary>
        /// <param name="value">A JavaScript string containing zero or more substitution strings.</param>
        [Template("console.warn(Bridge.Enum.toString({value:type}, {value}))")]
        public static extern void Warn(Enum value);

        /// <summary>
        /// Outputs a warning message to the Web Console.
        /// </summary>
        /// <param name="value">A JavaScript string containing zero or more substitution strings.</param>
        [Template("console.warn(String.fromCharCode({value}))")]
        public static extern void Warn(char value);

        /// <summary>
        /// Outputs a warning message to the Web Console.
        /// </summary>
        /// <param name="value">A JavaScript string containing zero or more substitution strings.</param>
        [Template("console.warn({value}.toString())")]
        public static extern void Warn(decimal value);

        /// <summary>
        /// Outputs a warning message to the Web Console.
        /// </summary>
        /// <param name="value">A JavaScript string containing zero or more substitution strings.</param>
        [Template("console.warn({value} && {value}.toString())")]
        public static extern void Warn(decimal? value);

        /// <summary>
        /// Outputs a warning message to the Web Console.
        /// </summary>
        /// <param name="msg">A JavaScript string containing zero or more substitution strings.</param>
        /// <param name="args">JavaScript objects with which to replace substitution strings within msg. This gives you additional control over the format of the output.</param>
        public static extern void Warn(string msg, params object[] args);

        /// <summary>
        /// Outputs a warning message to the Web Console.
        /// </summary>
        /// <param name="args">JavaScript objects with which to replace substitution strings within msg. This gives you additional control over the format of the output.</param>
        public static extern void Warn(params object[] args);

        #endregion Warn

        #region Error

        /// <summary>
        /// Outputs an error message to the Web Console.
        /// </summary>
        /// <param name="msg">A JavaScript string containing zero or more substitution strings.</param>
        public static extern void Error(string msg);

        /// <summary>
        /// Outputs an error message to the Web Console.
        /// </summary>
        /// <param name="value">A JavaScript string containing zero or more substitution strings.</param>
        [Template("console.error(Bridge.Enum.toString({value:type}, {value}))")]
        public static extern void Error(Enum value);

        /// <summary>
        /// Outputs an error message to the Web Console.
        /// </summary>
        /// <param name="value">A JavaScript string containing zero or more substitution strings.</param>
        [Template("console.error(String.fromCharCode({value}))")]
        public static extern void Error(char value);

        /// <summary>
        /// Outputs an error message to the Web Console.
        /// </summary>
        /// <param name="value">A JavaScript string containing zero or more substitution strings.</param>
        [Template("console.error({value}.toString())")]
        public static extern void Error(decimal value);

        /// <summary>
        /// Outputs an error message to the Web Console.
        /// </summary>
        /// <param name="value">A JavaScript string containing zero or more substitution strings.</param>
        [Template("console.error({value} && {value}.toString())")]
        public static extern void Error(decimal? value);

        /// <summary>
        /// Outputs an error message to the Web Console.
        /// </summary>
        /// <param name="msg">A JavaScript string containing zero or more substitution strings.</param>
        /// <param name="args">JavaScript objects with which to replace substitution strings within msg. This gives you additional control over the format of the output.</param>
        public static extern void Error(string msg, params object[] args);

        /// <summary>
        /// Outputs an error message to the Web Console.
        /// </summary>
        /// <param name="args">JavaScript objects with which to replace substitution strings within msg. This gives you additional control over the format of the output.</param>
        public static extern void Error(params object[] args);

        #endregion Error

        #region Grouping

        /// <summary>
        /// Creates a new inline group, indenting all following output by another level. To move back out a level, call groupEnd().
        /// </summary>
        public static extern void Group();

        /// <summary>
        /// Creates a new inline group, indenting all following output by another level. To move back out a level, call groupEnd().
        /// </summary>
        /// <param name="msg">A message.</param>
        public static extern void Group(string msg);

        /// <summary>
        /// Creates a new inline group, indenting all following output by another level. To move back out a level, call groupEnd().
        /// </summary>
        /// <param name="msg">A message.</param>
        /// <param name="args">JavaScript objects with which to replace substitution strings within msg.</param>
        public static extern void Group(string msg, params object[] args);

        /// <summary>
        /// Creates a new inline group, indenting all following output by another level. To move back out a level, call groupEnd().
        /// </summary>

        /// <param name="args">JavaScript objects with which to replace substitution strings within msg.</param>
        public static extern void Group(params object[] args);

        /// <summary>
        /// Creates a new inline group in the Web Console. Unlike console.group(), however, the new group is created collapsed. The user will need to use the disclosure button next to it to expand it, revealing the entries created in the group.
        /// </summary>
        public static extern void GroupCollapsed();

        /// <summary>
        /// Creates a new inline group in the Web Console. Unlike console.group(), however, the new group is created collapsed. The user will need to use the disclosure button next to it to expand it, revealing the entries created in the group.
        /// </summary>
        /// <param name="msg">A message.</param>
        public static extern void GroupCollapsed(string msg);

        /// <summary>
        /// Creates a new inline group in the Web Console. Unlike console.group(), however, the new group is created collapsed. The user will need to use the disclosure button next to it to expand it, revealing the entries created in the group.
        /// </summary>
        /// <param name="msg">A message.</param>
        /// <param name="args">An array of objects to write to the group.</param>
        public static extern void GroupCollapsed(string msg, params object[] args);

        /// <summary>
        /// Creates a new inline group in the Web Console. Unlike console.group(), however, the new group is created collapsed. The user will need to use the disclosure button next to it to expand it, revealing the entries created in the group.
        /// </summary>
        /// <param name="args">An array of objects to write to the group.</param>
        public static extern void GroupCollapsed(params object[] args);

        /// <summary>
        /// Exits the current inline group.
        /// </summary>
        public static extern void GroupEnd();

        #endregion Grouping

        #region Assert

        /// <summary>
        /// Log a message and stack trace to console if first argument is false.
        /// </summary>
        /// <param name="assertion">If false then message is shown</param>
        public static extern void Assert(bool assertion);

        /// <summary>
        /// Log a message and stack trace to console if first argument is false.
        /// </summary>
        /// <param name="assertion">If false then message is shown</param>
        /// <param name="msg">A JavaScript string containing zero or more substitution strings.</param>
        public static extern void Assert(bool assertion, string msg);

        /// <summary>
        /// Log a message and stack trace to console if first argument is false.
        /// </summary>
        /// <param name="assertion">If false then message is shown</param>
        /// <param name="msg">A JavaScript string containing zero or more substitution strings.</param>
        /// <param name="args">JavaScript objects with which to replace substitution strings within msg. This gives you additional control over the format of the output.</param>
        public static extern void Assert(bool assertion, string msg, params object[] args);

        #endregion Assert

        #region Utils

        /// <summary>
        /// Outputs a stack trace.
        /// </summary>
        public static extern void Trace();

        #endregion Utils

        #region Timer

        /// <summary>
        /// Starts a timer with a name specified as an input parameter. Up to 10,000 simultaneous timers can run on a given page.
        /// </summary>
        /// <param name="name">The name to give the new timer. This will identify the timer; use the same name when calling console.timeEnd() to stop the timer and get the time output to the console.</param>
        public static extern void Time(object name);

        /// <summary>
        /// Stops the specified timer and logs the elapsed time in seconds since its start.
        /// </summary>
        /// <param name="name">The name of the timer to stop. Once stopped, the elapsed time is automatically displayed in the Web Console.</param>
        public static extern void TimeEnd(object name);

        /// <summary>
        /// This method adds an event to the Timeline during a recording session. This lets you visually correlate your code generated time stamp to other events, such as screen layout and paints, that are automatically added to the Timeline.
        /// </summary>
        /// <param name="name">Stamp name</param>
        public static extern void TimeStamp(object name);

        #endregion Timer

        #region Profile

        /// <summary>
        /// Starts the JavaScript profiler. You can specify an optional label for the profile.
        /// </summary>
        public static extern void Profile();

        /// <summary>
        /// Starts the JavaScript profiler. You can specify an optional label for the profile.
        /// </summary>
        /// <param name="profileLabel"></param>
        public static extern void Profile(string profileLabel);

        /// <summary>
        /// Stops the profiler.
        /// </summary>
        public static extern void ProfileEnd();

        #endregion Profile

        #region Count

        /// <summary>
        /// Logs the number of times that this particular call to count() has been called. This function takes an optional argument label.
        /// If label is supplied, this function logs the number of times count() has been called with that particular label.
        /// If label is omitted, the function logs the number of times count() has been called at this particular line.
        /// </summary>
        public static extern void Count();

        /// <summary>
        /// Logs the number of times that this particular call to count() has been called. This function takes an optional argument label.
        /// If label is supplied, this function logs the number of times count() has been called with that particular label.
        /// If label is omitted, the function logs the number of times count() has been called at this particular line.
        /// </summary>
        /// <param name="label">Label value</param>
        public static extern void Count(string label);

        #endregion Count

        #region Dir

        /// <summary>
        /// Displays an interactive listing of the properties of a specified JavaScript object. This listing lets you use disclosure triangles to examine the contents of child objects.
        /// </summary>
        /// <param name="obj">A JavaScript object whose properties should be output.</param>
        public static extern void Dir(object obj);

        /// <summary>
        /// Displays an XML/HTML Element representation of the specified object if possible or the JavaScript Object view if it is not.
        /// </summary>
        /// <param name="node">An XML/HTML Element</param>
        [Template("console.dirxml({node})")]
        public static extern void DirXml(Node node);

        #endregion Dir

        #region Table

        /// <summary>
        /// Displays tabular data as a table.
        /// </summary>
        /// <param name="data">The data to display. This must be either an array or an object.</param>
        public static extern void Table(object data);

        /// <summary>
        /// Displays tabular data as a table.
        /// </summary>
        /// <param name="data">The data to display. This must be either an array or an object.</param>
        /// <param name="columns">An array containing the names of columns to include in the output.</param>
        public static extern void Table(object data, string[] columns);

        #endregion Table
    }
}