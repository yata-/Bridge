using Bridge;
using System.Collections;
using System.Collections.Generic;
using System.Text.RegularExpressions;

namespace System.Linq 
{
	[Ignore]
    [Name("Bridge.Linq.Enumerable")]
	public static class Enumerable 
    {
	    [Template("Bridge.Linq.Enumerable.from({source}).aggregate({func})")]
	    public static TSource Aggregate<TSource>(this IEnumerable<TSource> source, Func<TSource, TSource, TSource> func)
	    {
	        return default(TSource);
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).aggregate({seed}, {func})")]
	    public static TAccumulate Aggregate<TSource, TAccumulate>(this IEnumerable<TSource> source, TAccumulate seed,
	        Func<TAccumulate, TSource, TAccumulate> func)
	    {
	        return default(TAccumulate);
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).aggregate({seed}, {func}, {resultSelector})")]
	    public static TResult Aggregate<TSource, TAccumulate, TResult>(this IEnumerable<TSource> source, TAccumulate seed,
	        Func<TAccumulate, TSource, TAccumulate> func, Func<TAccumulate, TResult> resultSelector)
	    {
	        return default(TResult);
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).all({predicate})")]
	    public static bool All<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate)
	    {
	        return false;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).alternate({value})")]
	    public static EnumerableInstance<TSource> Alternate<TSource>(this IEnumerable<TSource> source, TSource value)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).any()")]
	    public static bool Any<TSource>(this IEnumerable<TSource> source)
	    {
	        return false;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).any({predicate})")]
	    public static bool Any<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate)
	    {
	        return false;
	    }

	    [Template("{source}.average()")]
	    public static double Average(this EnumerableInstance<int> source)
	    {
	        return 0;
	    }

	    [Template("{source}.average()")]
	    public static double Average(this EnumerableInstance<long> source)
	    {
	        return 0;
	    }

	    [Template("{source}.average()")]
	    public static float Average(this EnumerableInstance<float> source)
	    {
	        return 0;
	    }

	    [Template("{source}.average()")]
	    public static double Average(this EnumerableInstance<double> source)
	    {
	        return 0;
	    }

	    [Template("{source}.average()")]
	    public static decimal Average(this EnumerableInstance<decimal> source)
	    {
	        return 0;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).average()")]
	    public static double Average(this IEnumerable<int> source)
	    {
	        return 0;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).average()")]
	    public static double Average(this IEnumerable<long> source)
	    {
	        return 0;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).average()")]
	    public static float Average(this IEnumerable<float> source)
	    {
	        return 0;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).average()")]
	    public static double Average(this IEnumerable<double> source)
	    {
	        return 0;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).average()")]
	    public static decimal Average(this IEnumerable<decimal> source)
	    {
	        return 0;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).average({selector})")]
	    public static double Average<TSource>(this IEnumerable<TSource> source, Func<TSource, int> selector)
	    {
	        return 0;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).average({selector})")]
	    public static double Average<TSource>(this IEnumerable<TSource> source, Func<TSource, long> selector)
	    {
	        return 0;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).average({selector})")]
	    public static float Average<TSource>(this IEnumerable<TSource> source, Func<TSource, float> selector)
	    {
	        return 0;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).average({selector})")]
	    public static double Average<TSource>(this IEnumerable<TSource> source, Func<TSource, double> selector)
	    {
	        return 0;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).average({selector})")]
	    public static decimal Average<TSource>(this IEnumerable<TSource> source, Func<TSource, decimal> selector)
	    {
	        return 0;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).buffer({count})")]
	    public static EnumerableInstance<TSource[]> Buffer<TSource>(this IEnumerable<TSource> source, int count)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).select(function(x) {{ return Bridge.cast(x, {TResult}); }})")]
	    public static EnumerableInstance<TResult> Cast<TResult>(this IEnumerable source)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).catchError({action})")]
	    public static EnumerableInstance<TSource> CatchError<TSource>(this IEnumerable<TSource> source,
	        Action<Exception> action)
	    {
	        return null;
	    }

	    public static EnumerableInstance<TResult> Choice<TResult>(params TResult[] arguments)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).concat({other})")]
	    public static EnumerableInstance<TSource> Concat<TSource>(this IEnumerable<TSource> source,
	        IEnumerable<TSource> other)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).contains({value})")]
	    public static bool Contains<TSource>(this IEnumerable<TSource> source, TSource value)
	    {
	        return false;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).contains({value}, {comparer})")]
	    public static bool Contains<TSource>(this IEnumerable<TSource> source, TSource value,
	        IEqualityComparer<TSource> comparer)
	    {
	        return false;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).count()")]
	    public static int Count<TSource>(this IEnumerable<TSource> source)
	    {
	        return 0;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).count({predicate})")]
	    public static int Count<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate)
	    {
	        return 0;
	    }

	    public static EnumerableInstance<TResult> Cycle<TResult>(params TResult[] arguments)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).defaultIfEmpty(Bridge.getDefaultValue({TSource}))")]
	    public static EnumerableInstance<TSource> DefaultIfEmpty<TSource>(this IEnumerable<TSource> source)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).defaultIfEmpty({defaultValue})")]
	    public static EnumerableInstance<TSource> DefaultIfEmpty<TSource>(this IEnumerable<TSource> source,
	        TSource defaultValue)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).distinct()")]
	    public static EnumerableInstance<TSource> Distinct<TSource>(this IEnumerable<TSource> source)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).distinct({comparer})")]
	    public static EnumerableInstance<TSource> Distinct<TSource>(this IEnumerable<TSource> source,
	        IEqualityComparer<TSource> comparer)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).doAction({action})")]
	    public static EnumerableInstance<TSource> DoAction<TSource>(this IEnumerable<TSource> source,
	        Action<TSource> action)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).doAction({action})")]
	    public static EnumerableInstance<TSource> DoAction<TSource>(this IEnumerable<TSource> source,
	        Action<TSource, int> action)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).elementAt({index})")]
	    public static TSource ElementAt<TSource>(this IEnumerable<TSource> source, int index)
	    {
	        return default(TSource);
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).elementAtOrDefault({index}, Bridge.getDefaultValue({TSource}))")]
	    public static TSource ElementAtOrDefault<TSource>(this IEnumerable<TSource> source, int index)
	    {
	        return default(TSource);
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).elementAtOrDefault({index}, {defaultValue})")]
	    public static TSource ElementAtOrDefault<TSource>(this IEnumerable<TSource> source, int index, TSource defaultValue)
	    {
	        return default(TSource);
	    }

	    public static EnumerableInstance<TResult> Empty<TResult>()
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).except({other})")]
	    public static EnumerableInstance<TSource> Except<TSource>(this IEnumerable<TSource> source,
	        IEnumerable<TSource> other)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).except({other}, {comparer})")]
	    public static EnumerableInstance<TSource> Except<TSource>(this IEnumerable<TSource> source,
	        IEnumerable<TSource> other, IEqualityComparer<TSource> comparer)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).finallyAction({action})")]
	    public static EnumerableInstance<TSource> FinallyAction<TSource>(this IEnumerable<TSource> source, Action action)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).first()")]
	    public static TSource First<TSource>(this IEnumerable<TSource> source)
	    {
	        return default(TSource);
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).first({predicate})")]
	    public static TSource First<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate)
	    {
	        return default(TSource);
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).firstOrDefault(null, Bridge.getDefaultValue({TSource}))")]
	    public static TSource FirstOrDefault<TSource>(this IEnumerable<TSource> source)
	    {
	        return default(TSource);
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).firstOrDefault(null, {defaultValue})")]
	    public static TSource FirstOrDefault<TSource>(this IEnumerable<TSource> source, TSource defaultValue)
	    {
	        return default(TSource);
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).firstOrDefault({predicate}, Bridge.getDefaultValue({TSource}))")]
	    public static TSource FirstOrDefault<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate)
	    {
	        return default(TSource);
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).firstOrDefault({predicate}, {defaultValue})")]
	    public static TSource FirstOrDefault<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate,
	        TSource defaultValue)
	    {
	        return default(TSource);
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).flatten()")]
	    public static EnumerableInstance<object> Flatten(this IEnumerable<object> source)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).force()")]
	    public static void Force<TSource>(this IEnumerable<TSource> source)
	    {
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).forEach({action})")]
	    public static void ForEach<TSource>(this IEnumerable<TSource> source, Action<TSource> action)
	    {
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).forEach({action})")]
	    public static void ForEach<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> action)
	    {
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).forEach({action})")]
	    public static void ForEach<TSource>(this IEnumerable<TSource> source, Action<TSource, int> action)
	    {
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).forEach({action})")]
	    public static void ForEach<TSource>(this IEnumerable<TSource> source, Func<TSource, int, bool> action)
	    {
	    }

	    public static EnumerableInstance<TResult> From<TResult>(IEnumerable<TResult> source)
	    {
	        return null;
	    }

	    public static EnumerableInstance<string> From(string source)
	    {
	        return null;
	    }

	    public static EnumerableInstance<object> From(object arrayLikeObject)
	    {
	        return null;
	    }

	    public static EnumerableInstance<TResult> Generate<TResult>(Func<TResult> func)
	    {
	        return null;
	    }

	    public static EnumerableInstance<TResult> Generate<TResult>(Func<TResult> func, int count)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).groupBy({keySelector})")]
	    public static EnumerableInstance<Grouping<TKey, TSource>> GroupBy<TSource, TKey>(this IEnumerable<TSource> source,
	        Func<TSource, TKey> keySelector)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).groupBy({keySelector}, null, null, {comparer})")]
	    public static EnumerableInstance<Grouping<TKey, TSource>> GroupBy<TSource, TKey>(this IEnumerable<TSource> source,
	        Func<TSource, TKey> keySelector, IEqualityComparer<TKey> comparer)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).groupBy({keySelector}, {elementSelector})")]
	    public static EnumerableInstance<Grouping<TKey, TElement>> GroupBy<TSource, TKey, TElement>(
	        this IEnumerable<TSource> source, Func<TSource, TKey> keySelector, Func<TSource, TElement> elementSelector)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).groupBy({keySelector}, null, {resultSelector})")]
	    public static EnumerableInstance<TResult> GroupBy<TSource, TKey, TResult>(this IEnumerable<TSource> source,
	        Func<TSource, TKey> keySelector, Func<TKey, IEnumerable<TSource>, TResult> resultSelector)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).groupBy({keySelector}, {elementSelector}, null, {comparer})")]
	    public static EnumerableInstance<Grouping<TKey, TElement>> GroupBy<TSource, TKey, TElement>(
	        this IEnumerable<TSource> source, Func<TSource, TKey> keySelector, Func<TSource, TElement> elementSelector,
	        IEqualityComparer<TKey> comparer)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).groupBy({keySelector}, {elementSelector}, {resultSelector})")]
	    public static EnumerableInstance<TResult> GroupBy<TSource, TKey, TElement, TResult>(
	        this IEnumerable<TSource> source, Func<TSource, TKey> keySelector, Func<TSource, TElement> elementSelector,
	        Func<TKey, IEnumerable<TElement>, TResult> resultSelector)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).groupBy({keySelector}, null, {resultSelector}, {comparer})")]
	    public static EnumerableInstance<TResult> GroupBy<TSource, TKey, TResult>(this IEnumerable<TSource> source,
	        Func<TSource, TKey> keySelector, Func<TKey, IEnumerable<TSource>, TResult> resultSelector,
	        IEqualityComparer<TKey> comparer)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).groupBy({keySelector}, {elementSelector}, {resultSelector}, {comparer})")]
	    public static EnumerableInstance<TResult> GroupBy<TSource, TKey, TElement, TResult>(
	        this IEnumerable<TSource> source, Func<TSource, TKey> keySelector, Func<TSource, TElement> elementSelector,
	        Func<TKey, IEnumerable<TElement>, TResult> resultSelector, IEqualityComparer<TKey> comparer)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({outer}).groupJoin({inner}, {outerKeySelector}, {innerKeySelector}, {resultSelector})")]
	    public static EnumerableInstance<TResult> GroupJoin<TOuter, TInner, TKey, TResult>(this IEnumerable<TOuter> outer,
	        IEnumerable<TInner> inner, Func<TOuter, TKey> outerKeySelector, Func<TInner, TKey> innerKeySelector,
	        Func<TOuter, IEnumerable<TInner>, TResult> resultSelector)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({outer}).groupJoin({inner}, {outerKeySelector}, {innerKeySelector}, {resultSelector}, {comparer})")]
	    public static EnumerableInstance<TResult> GroupJoin<TOuter, TInner, TKey, TResult>(this IEnumerable<TOuter> outer,
	        IEnumerable<TInner> inner, Func<TOuter, TKey> outerKeySelector, Func<TInner, TKey> innerKeySelector,
	        Func<TOuter, IEnumerable<TInner>, TResult> resultSelector, IEqualityComparer<TKey> comparer)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).indexOf({item})")]
	    public static int IndexOf<TSource>(this IEnumerable<TSource> source, TSource item)
	    {
	        return 0;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).indexOf({predicate})")]
	    public static int IndexOf<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate)
	    {
	        return 0;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).indexOf({item}, {comparer})")]
	    public static int IndexOf<TSource>(this IEnumerable<TSource> source, TSource item,
	        IEqualityComparer<TSource> comparer)
	    {
	        return 0;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).insert({index}, {other})")]
	    public static EnumerableInstance<TSource> Insert<TSource>(this IEnumerable<TSource> source, int index,
	        IEnumerable<TSource> other)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).intersect({other})")]
	    public static EnumerableInstance<TSource> Intersect<TSource>(this IEnumerable<TSource> source,
	        IEnumerable<TSource> other)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).intersect({other}, {comparer})")]
	    public static EnumerableInstance<TSource> Intersect<TSource>(this IEnumerable<TSource> source,
	        IEnumerable<TSource> other, IEqualityComparer<TSource> comparer)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({outer}).join({inner}, {outerKeySelector}, {innerKeySelector}, {resultSelector})")]
	    public static EnumerableInstance<TResult> Join<TOuter, TInner, TKey, TResult>(this IEnumerable<TOuter> outer,
	        IEnumerable<TInner> inner, Func<TOuter, TKey> outerKeySelector, Func<TInner, TKey> innerKeySelector,
	        Func<TOuter, TInner, TResult> resultSelector)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({outer}).join({inner}, {outerKeySelector}, {innerKeySelector}, {resultSelector}, {comparer})")]
	    public static EnumerableInstance<TResult> Join<TOuter, TInner, TKey, TResult>(this IEnumerable<TOuter> outer,
	        IEnumerable<TInner> inner, Func<TOuter, TKey> outerKeySelector, Func<TInner, TKey> innerKeySelector,
	        Func<TOuter, TInner, TResult> resultSelector, IEqualityComparer<TKey> comparer)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).last()")]
	    public static TSource Last<TSource>(this IEnumerable<TSource> source)
	    {
	        return default(TSource);
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).last({predicate})")]
	    public static TSource Last<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate)
	    {
	        return default(TSource);
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).lastIndexOf({item})")]
	    public static int LastIndexOf<TSource>(this IEnumerable<TSource> source, TSource item)
	    {
	        return 0;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).lastIndexOf({predicate})")]
	    public static int LastIndexOf<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate)
	    {
	        return 0;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).lastIndexOf({item}, {comparer})")]
	    public static int LastIndexOf<TSource>(this IEnumerable<TSource> source, TSource item,
	        IEqualityComparer<TSource> comparer)
	    {
	        return 0;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).lastOrDefault(null, Bridge.getDefaultValue({TSource}))")]
	    public static TSource LastOrDefault<TSource>(this IEnumerable<TSource> source)
	    {
	        return default(TSource);
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).lastOrDefault(null, {defaultValue})")]
	    public static TSource LastOrDefault<TSource>(this IEnumerable<TSource> source, TSource defaultValue)
	    {
	        return default(TSource);
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).lastOrDefault({predicate}, Bridge.getDefaultValue({TSource}))")]
	    public static TSource LastOrDefault<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate)
	    {
	        return default(TSource);
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).lastOrDefault({predicate}, {defaultValue})")]
	    public static TSource LastOrDefault<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate,
	        TSource defaultValue)
	    {
	        return default(TSource);
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).letBind({func})")]
	    public static EnumerableInstance<TResult> LetBind<TSource, TResult>(this IEnumerable<TSource> source,
	        Func<IEnumerable<TSource>, IEnumerable<TResult>> func)
	    {
	        return null;
	    }

	    public static EnumerableInstance<TResult> Make<TResult>(TResult element)
	    {
	        return null;
	    }

	    public static EnumerableInstance<RegexMatch> Matches(string input, Regex pattern)
	    {
	        return null;
	    }

	    public static EnumerableInstance<RegexMatch> Matches(string input, string pattern)
	    {
	        return null;
	    }

	    public static EnumerableInstance<RegexMatch> Matches(string input, string pattern, string flags)
	    {
	        return null;
	    }

	    [Template("{source}.max()")]
	    public static int Max(this EnumerableInstance<int> source)
	    {
	        return 0;
	    }

	    [Template("{source}.max()")]
	    public static long Max(this EnumerableInstance<long> source)
	    {
	        return 0;
	    }

	    [Template("{source}.max()")]
	    public static float Max(this EnumerableInstance<float> source)
	    {
	        return 0;
	    }

	    [Template("{source}.max()")]
	    public static double Max(this EnumerableInstance<double> source)
	    {
	        return 0;
	    }

	    [Template("{source}.max()")]
	    public static decimal Max(this EnumerableInstance<decimal> source)
	    {
	        return 0;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).max()")]
	    public static int Max(this IEnumerable<int> source)
	    {
	        return 0;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).max()")]
	    public static long Max(this IEnumerable<long> source)
	    {
	        return 0;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).max()")]
	    public static float Max(this IEnumerable<float> source)
	    {
	        return 0;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).max()")]
	    public static double Max(this IEnumerable<double> source)
	    {
	        return 0;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).max()")]
	    public static decimal Max(this IEnumerable<decimal> source)
	    {
	        return 0;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).max({selector})")]
	    public static int Max<TSource>(this IEnumerable<TSource> source, Func<TSource, int> selector)
	    {
	        return 0;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).max({selector})")]
	    public static long Max<TSource>(this IEnumerable<TSource> source, Func<TSource, long> selector)
	    {
	        return 0;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).max({selector})")]
	    public static float Max<TSource>(this IEnumerable<TSource> source, Func<TSource, float> selector)
	    {
	        return 0;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).max({selector})")]
	    public static double Max<TSource>(this IEnumerable<TSource> source, Func<TSource, double> selector)
	    {
	        return 0;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).max({selector})")]
	    public static decimal Max<TSource>(this IEnumerable<TSource> source, Func<TSource, decimal> selector)
	    {
	        return 0;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).maxBy({selector})")]
	    public static TSource MaxBy<TSource>(this IEnumerable<TSource> source, Func<TSource, int> selector)
	    {
	        return default(TSource);
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).maxBy({selector})")]
	    public static TSource MaxBy<TSource>(this IEnumerable<TSource> source, Func<TSource, long> selector)
	    {
	        return default(TSource);
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).maxBy({selector})")]
	    public static TSource MaxBy<TSource>(this IEnumerable<TSource> source, Func<TSource, float> selector)
	    {
	        return default(TSource);
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).maxBy({selector})")]
	    public static TSource MaxBy<TSource>(this IEnumerable<TSource> source, Func<TSource, double> selector)
	    {
	        return default(TSource);
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).maxBy({selector})")]
	    public static TSource MaxBy<TSource>(this IEnumerable<TSource> source, Func<TSource, decimal> selector)
	    {
	        return default(TSource);
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).memoize()")]
	    public static EnumerableInstance<TSource> Memoize<TSource>(this IEnumerable<TSource> source)
	    {
	        return null;
	    }

	    [Template("{source}.min()")]
	    public static int Min(this EnumerableInstance<int> source)
	    {
	        return 0;
	    }

	    [Template("{source}.min()")]
	    public static long Min(this EnumerableInstance<long> source)
	    {
	        return 0;
	    }

	    [Template("{source}.min()")]
	    public static float Min(this EnumerableInstance<float> source)
	    {
	        return 0;
	    }

	    [Template("{source}.min()")]
	    public static double Min(this EnumerableInstance<double> source)
	    {
	        return 0;
	    }

	    [Template("{source}.min()")]
	    public static decimal Min(this EnumerableInstance<decimal> source)
	    {
	        return 0;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).min()")]
	    public static int Min(this IEnumerable<int> source)
	    {
	        return 0;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).min()")]
	    public static long Min(this IEnumerable<long> source)
	    {
	        return 0;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).min()")]
	    public static float Min(this IEnumerable<float> source)
	    {
	        return 0;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).min()")]
	    public static double Min(this IEnumerable<double> source)
	    {
	        return 0;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).min()")]
	    public static decimal Min(this IEnumerable<decimal> source)
	    {
	        return 0;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).min({selector})")]
	    public static int Min<TSource>(this IEnumerable<TSource> source, Func<TSource, int> selector)
	    {
	        return 0;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).min({selector})")]
	    public static long Min<TSource>(this IEnumerable<TSource> source, Func<TSource, long> selector)
	    {
	        return 0;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).min({selector})")]
	    public static float Min<TSource>(this IEnumerable<TSource> source, Func<TSource, float> selector)
	    {
	        return 0;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).min({selector})")]
	    public static double Min<TSource>(this IEnumerable<TSource> source, Func<TSource, double> selector)
	    {
	        return 0;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).min({selector})")]
	    public static decimal Min<TSource>(this IEnumerable<TSource> source, Func<TSource, decimal> selector)
	    {
	        return 0;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).minBy({selector})")]
	    public static TSource MinBy<TSource>(this IEnumerable<TSource> source, Func<TSource, int> selector)
	    {
	        return default(TSource);
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).minBy({selector})")]
	    public static TSource MinBy<TSource>(this IEnumerable<TSource> source, Func<TSource, long> selector)
	    {
	        return default(TSource);
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).minBy({selector})")]
	    public static TSource MinBy<TSource>(this IEnumerable<TSource> source, Func<TSource, float> selector)
	    {
	        return default(TSource);
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).minBy({selector})")]
	    public static TSource MinBy<TSource>(this IEnumerable<TSource> source, Func<TSource, double> selector)
	    {
	        return default(TSource);
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).minBy({selector})")]
	    public static TSource MinBy<TSource>(this IEnumerable<TSource> source, Func<TSource, decimal> selector)
	    {
	        return default(TSource);
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).ofType({TResult})")]
	    public static EnumerableInstance<TResult> OfType<TResult>(this IEnumerable source)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).orderBy()")]
	    public static OrderedEnumerable<TSource> OrderBy<TSource>(this IEnumerable<TSource> source)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).orderBy({keySelector})")]
	    public static OrderedEnumerable<TSource> OrderBy<TSource, TKey>(this IEnumerable<TSource> source,
	        Func<TSource, TKey> keySelector)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).orderBy({keySelector}, {comparer})")]
	    public static OrderedEnumerable<TSource> OrderBy<TSource, TKey>(this IEnumerable<TSource> source,
	        Func<TSource, TKey> keySelector, IComparer<TKey> comparer)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).orderByDescending()")]
	    public static OrderedEnumerable<TSource> OrderByDescending<TSource>(this IEnumerable<TSource> source)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).orderByDescending({keySelector})")]
	    public static OrderedEnumerable<TSource> OrderByDescending<TSource, TKey>(this IEnumerable<TSource> source,
	        Func<TSource, TKey> keySelector)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).orderByDescending({keySelector}, {comparer})")]
	    public static OrderedEnumerable<TSource> OrderByDescending<TSource, TKey>(this IEnumerable<TSource> source,
	        Func<TSource, TKey> keySelector, IComparer<TKey> comparer)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).pairwise({selector})")]
	    public static EnumerableInstance<TResult> Pairwise<TSource, TResult>(this IEnumerable<TSource> source,
	        Func<TSource, TSource, TResult> selector)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).partitionBy({keySelector})")]
	    public static EnumerableInstance<Grouping<TKey, TSource>> PartitionBy<TSource, TKey>(
	        this IEnumerable<TSource> source, Func<TSource, TKey> keySelector)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).partitionBy({keySelector}, null, null, {comparer})")]
	    public static EnumerableInstance<Grouping<TKey, TSource>> PartitionBy<TSource, TKey>(
	        this IEnumerable<TSource> source, Func<TSource, TKey> keySelector, IEqualityComparer<TKey> comparer)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).partitionBy({keySelector}, {elementSelector})")]
	    public static EnumerableInstance<Grouping<TKey, TElement>> PartitionBy<TSource, TKey, TElement>(
	        this IEnumerable<TSource> source, Func<TSource, TKey> keySelector, Func<TSource, TElement> elementSelector)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).partitionBy({keySelector}, null, {resultSelector})")]
	    public static EnumerableInstance<TResult> PartitionBy<TSource, TKey, TResult>(this IEnumerable<TSource> source,
	        Func<TSource, TKey> keySelector, Func<TKey, IEnumerable<TSource>, TResult> resultSelector)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).partitionBy({keySelector}, {elementSelector}, null, {comparer})")]
	    public static EnumerableInstance<Grouping<TKey, TElement>> PartitionBy<TSource, TKey, TElement>(
	        this IEnumerable<TSource> source, Func<TSource, TKey> keySelector, Func<TSource, TElement> elementSelector,
	        IEqualityComparer<TKey> comparer)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).partitionBy({keySelector}, {elementSelector}, {resultSelector})")]
	    public static EnumerableInstance<TResult> PartitionBy<TSource, TKey, TElement, TResult>(
	        this IEnumerable<TSource> source, Func<TSource, TKey> keySelector, Func<TSource, TElement> elementSelector,
	        Func<TKey, IEnumerable<TElement>, TResult> resultSelector)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).partitionBy({keySelector}, null, {resultSelector}, {comparer})")]
	    public static EnumerableInstance<TResult> PartitionBy<TSource, TKey, TResult>(this IEnumerable<TSource> source,
	        Func<TSource, TKey> keySelector, Func<TKey, IEnumerable<TSource>, TResult> resultSelector,
	        IEqualityComparer<TKey> comparer)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).partitionBy({keySelector}, {elementSelector}, {resultSelector}, {comparer})")]
	    public static EnumerableInstance<TResult> PartitionBy<TSource, TKey, TElement, TResult>(
	        this IEnumerable<TSource> source, Func<TSource, TKey> keySelector, Func<TSource, TElement> elementSelector,
	        Func<TKey, IEnumerable<TElement>, TResult> resultSelector, IEqualityComparer<TKey> comparer)
	    {
	        return null;
	    }

	    public static EnumerableInstance<int> Range(int start, int count)
	    {
	        return null;
	    }

	    public static EnumerableInstance<int> Range(int start, int count, int step)
	    {
	        return null;
	    }

	    public static EnumerableInstance<int> RangeDown(int start, int count)
	    {
	        return null;
	    }

	    public static EnumerableInstance<int> RangeDown(int start, int count, int step)
	    {
	        return null;
	    }

	    public static EnumerableInstance<int> RangeTo(int start, int count)
	    {
	        return null;
	    }

	    public static EnumerableInstance<int> RangeTo(int start, int count, int step)
	    {
	        return null;
	    }

	    public static EnumerableInstance<TResult> Repeat<TResult>(TResult element)
	    {
	        return null;
	    }

	    public static EnumerableInstance<TResult> Repeat<TResult>(TResult element, int count)
	    {
	        return null;
	    }

	    public static EnumerableInstance<TResult> RepeatWithFinalize<TResult>(Func<TResult> initializer,
	        Action<TResult> finalizer)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).reverse()")]
	    public static EnumerableInstance<TSource> Reverse<TSource>(this IEnumerable<TSource> source)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).scan({func})")]
	    public static EnumerableInstance<TSource> Scan<TSource>(this IEnumerable<TSource> source,
	        Func<TSource, TSource, TSource> func)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).scan({seed}, {func})")]
	    public static EnumerableInstance<TAccumulate> Scan<TSource, TAccumulate>(this IEnumerable<TSource> source,
	        TAccumulate seed, Func<TAccumulate, TSource, TAccumulate> func)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).select({selector})")]
	    public static EnumerableInstance<TResult> Select<TSource, TResult>(this IEnumerable<TSource> source,
	        Func<TSource, TResult> selector)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).select({selector})")]
	    public static EnumerableInstance<TResult> Select<TSource, TResult>(this IEnumerable<TSource> source,
	        Func<TSource, int, TResult> selector)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).selectMany({selector})")]
	    public static EnumerableInstance<TResult> SelectMany<TSource, TResult>(this IEnumerable<TSource> source,
	        Func<TSource, IEnumerable<TResult>> selector)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).selectMany({selector})")]
	    public static EnumerableInstance<TResult> SelectMany<TSource, TResult>(this IEnumerable<TSource> source,
	        Func<TSource, int, IEnumerable<TResult>> selector)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).selectMany({collectionSelector}, {resultSelector})")]
	    public static EnumerableInstance<TResult> SelectMany<TSource, TCollection, TResult>(
	        this IEnumerable<TSource> source, Func<TSource, IEnumerable<TCollection>> collectionSelector,
	        Func<TSource, TCollection, TResult> resultSelector)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).selectMany({collectionSelector}, {resultSelector})")]
	    public static EnumerableInstance<TResult> SelectMany<TSource, TCollection, TResult>(
	        this IEnumerable<TSource> source, Func<TSource, int, IEnumerable<TCollection>> collectionSelector,
	        Func<TSource, TCollection, TResult> resultSelector)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).sequenceEqual({other})")]
	    public static bool SequenceEqual<TSource>(this IEnumerable<TSource> source, IEnumerable<TSource> other)
	    {
	        return false;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).sequenceEqual({other}, {comparer})")]
	    public static bool SequenceEqual<TSource>(this IEnumerable<TSource> source, IEnumerable<TSource> other,
	        IEqualityComparer<TSource> comparer)
	    {
	        return false;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).share()")]
	    public static EnumerableInstance<TSource> Share<TSource>(this IEnumerable<TSource> source)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).shuffle()")]
	    public static EnumerableInstance<TSource> Shuffle<TSource>(this IEnumerable<TSource> source)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).single()")]
	    public static TSource Single<TSource>(this IEnumerable<TSource> source)
	    {
	        return default(TSource);
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).single({predicate})")]
	    public static TSource Single<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate)
	    {
	        return default(TSource);
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).singleOrDefault(null, Bridge.getDefaultValue({TSource}))")]
	    public static TSource SingleOrDefault<TSource>(this IEnumerable<TSource> source)
	    {
	        return default(TSource);
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).singleOrDefault(null, {defaultValue})")]
	    public static TSource SingleOrDefault<TSource>(this IEnumerable<TSource> source, TSource defaultValue)
	    {
	        return default(TSource);
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).singleOrDefault({predicate}, Bridge.getDefaultValue({TSource}))")]
	    public static TSource SingleOrDefault<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate)
	    {
	        return default(TSource);
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).singleOrDefault({predicate}, {defaultValue})")]
	    public static TSource SingleOrDefault<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate,
	        TSource defaultValue)
	    {
	        return default(TSource);
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).skip({count})")]
	    public static EnumerableInstance<TSource> Skip<TSource>(this IEnumerable<TSource> source, int count)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).skipWhile({predicate})")]
	    public static EnumerableInstance<TSource> SkipWhile<TSource>(this IEnumerable<TSource> source,
	        Func<TSource, bool> predicate)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).skipWhile({predicate})")]
	    public static EnumerableInstance<TSource> SkipWhile<TSource>(this IEnumerable<TSource> source,
	        Func<TSource, int, bool> predicate)
	    {
	        return null;
	    }

	    [Template("{source}.sum()")]
	    public static int Sum(this EnumerableInstance<int> source)
	    {
	        return 0;
	    }

	    [Template("{source}.sum()")]
	    public static long Sum(this EnumerableInstance<long> source)
	    {
	        return 0;
	    }

	    [Template("{source}.sum()")]
	    public static float Sum(this EnumerableInstance<float> source)
	    {
	        return 0;
	    }

	    [Template("{source}.sum()")]
	    public static double Sum(this EnumerableInstance<double> source)
	    {
	        return 0;
	    }

	    [Template("{source}.sum()")]
	    public static decimal Sum(this EnumerableInstance<decimal> source)
	    {
	        return 0;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).sum()")]
	    public static int Sum(this IEnumerable<int> source)
	    {
	        return 0;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).sum()")]
	    public static long Sum(this IEnumerable<long> source)
	    {
	        return 0;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).sum()")]
	    public static float Sum(this IEnumerable<float> source)
	    {
	        return 0;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).sum()")]
	    public static double Sum(this IEnumerable<double> source)
	    {
	        return 0;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).sum()")]
	    public static decimal Sum(this IEnumerable<decimal> source)
	    {
	        return 0;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).sum({selector})")]
	    public static int Sum<TSource>(this IEnumerable<TSource> source, Func<TSource, int> selector)
	    {
	        return 0;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).sum({selector})")]
	    public static long Sum<TSource>(this IEnumerable<TSource> source, Func<TSource, long> selector)
	    {
	        return 0;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).sum({selector})")]
	    public static float Sum<TSource>(this IEnumerable<TSource> source, Func<TSource, float> selector)
	    {
	        return 0;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).sum({selector})")]
	    public static double Sum<TSource>(this IEnumerable<TSource> source, Func<TSource, double> selector)
	    {
	        return 0;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).sum({selector})")]
	    public static decimal Sum<TSource>(this IEnumerable<TSource> source, Func<TSource, decimal> selector)
	    {
	        return 0;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).take({count})")]
	    public static EnumerableInstance<TSource> Take<TSource>(this IEnumerable<TSource> source, int count)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).takeExceptLast()")]
	    public static EnumerableInstance<TSource> TakeExceptLast<TSource>(this IEnumerable<TSource> source)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).takeExceptLast({count})")]
	    public static EnumerableInstance<TSource> TakeExceptLast<TSource>(this IEnumerable<TSource> source, int count)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).takeFromLast({count})")]
	    public static EnumerableInstance<TSource> TakeFromLast<TSource>(this IEnumerable<TSource> source, int count)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).takeWhile({predicate})")]
	    public static EnumerableInstance<TSource> TakeWhile<TSource>(this IEnumerable<TSource> source,
	        Func<TSource, bool> predicate)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).takeWhile({predicate})")]
	    public static EnumerableInstance<TSource> TakeWhile<TSource>(this IEnumerable<TSource> source,
	        Func<TSource, int, bool> predicate)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).toArray()")]
	    public static T[] ToArray<T>(this IEnumerable<T> source)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).toDictionary({keySelector}, null, {TKey}, {TSource})")]
	    public static IDictionary<TKey, TSource> ToDictionary<TSource, TKey>(this IEnumerable<TSource> source,
	        Func<TSource, TKey> keySelector)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).toDictionary({keySelector}, null, {TKey}, {TSource}, {comparer})")]
	    public static IDictionary<TKey, TSource> ToDictionary<TSource, TKey>(this IEnumerable<TSource> source,
	        Func<TSource, TKey> keySelector, IEqualityComparer<TKey> comparer)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).toDictionary({keySelector}, {elementSelector}, {TKey}, {TValue})")]
	    public static IDictionary<TKey, TValue> ToDictionary<TSource, TKey, TValue>(this IEnumerable<TSource> source,
	        Func<TSource, TKey> keySelector, Func<TSource, TValue> elementSelector)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).toDictionary({keySelector}, {elementSelector}, {TKey}, {TValue}, {comparer})")]
	    public static IDictionary<TKey, TValue> ToDictionary<TSource, TKey, TValue>(this IEnumerable<TSource> source,
	        Func<TSource, TKey> keySelector, Func<TSource, TValue> elementSelector, IEqualityComparer<TKey> comparer)
	    {
	        return null;
	    }

	    public static EnumerableInstance<int> ToInfinity()
	    {
	        return null;
	    }

	    public static EnumerableInstance<int> ToInfinity(int start)
	    {
	        return null;
	    }

	    public static EnumerableInstance<int> ToInfinity(int start, int step)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).toJoinedString()")]
	    public static string ToJoinedString<TSource>(this IEnumerable<TSource> source)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).toJoinedString({separator})")]
	    public static string ToJoinedString<TSource>(this IEnumerable<TSource> source, string separator)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).toJoinedString({separator}, {selector})")]
	    public static string ToJoinedString<TSource>(this IEnumerable<TSource> source, string separator,
	        Func<TSource, string> selector)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).toList({T})")]
	    public static List<T> ToList<T>(this IEnumerable<T> source)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).toLookup({keySelector})")]
	    public static Lookup<TKey, TSource> ToLookup<TSource, TKey>(this IEnumerable<TSource> source,
	        Func<TSource, TKey> keySelector)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).toLookup({keySelector}, null, {comparer})")]
	    public static Lookup<TKey, TSource> ToLookup<TSource, TKey>(this IEnumerable<TSource> source,
	        Func<TSource, TKey> keySelector, IEqualityComparer<TKey> comparer)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).toLookup({keySelector}, {elementSelector})")]
	    public static Lookup<TKey, TElement> ToLookup<TSource, TKey, TElement>(this IEnumerable<TSource> source,
	        Func<TSource, TKey> keySelector, Func<TSource, TElement> elementSelector)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).toLookup({keySelector}, {elementSelector}, {comparer})")]
	    public static Lookup<TKey, TElement> ToLookup<TSource, TKey, TElement>(this IEnumerable<TSource> source,
	        Func<TSource, TKey> keySelector, Func<TSource, TElement> elementSelector, IEqualityComparer<TKey> comparer)
	    {
	        return null;
	    }

	    public static EnumerableInstance<int> ToNegativeInfinity()
	    {
	        return null;
	    }

	    public static EnumerableInstance<int> ToNegativeInfinity(int start)
	    {
	        return null;
	    }

	    public static EnumerableInstance<int> ToNegativeInfinity(int start, int step)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).toObject({keySelector}, {valueSelector})")]
	    public static object ToObject<TSource, TKey, TValue>(this IEnumerable<TSource> source,
	        Func<TSource, TKey> keySelector, Func<TSource, TValue> valueSelector)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).trace()")]
	    public static EnumerableInstance<TSource> Trace<TSource>(this IEnumerable<TSource> source)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).trace({message})")]
	    public static EnumerableInstance<TSource> Trace<TSource>(this IEnumerable<TSource> source, string message)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).trace({message}, {selector})")]
	    public static EnumerableInstance<TSource> Trace<TSource>(this IEnumerable<TSource> source, string message,
	        Func<TSource, string> selector)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).traverseBreadthFirst({func})")]
	    public static EnumerableInstance<TSource> TraverseBreadthFirst<TSource>(this IEnumerable<TSource> source,
	        Func<TSource, IEnumerable<TSource>> func)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).traverseBreadthFirst({func}, {resultSelector})")]
	    public static EnumerableInstance<TResult> TraverseBreadthFirst<TSource, TResult>(this IEnumerable<TSource> source,
	        Func<TSource, IEnumerable<TSource>> func, Func<TSource, TResult> resultSelector)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).traverseBreadthFirst({func}, {resultSelector})")]
	    public static EnumerableInstance<TResult> TraverseBreadthFirst<TSource, TResult>(this IEnumerable<TSource> source,
	        Func<TSource, IEnumerable<TSource>> func, Func<TSource, int, TResult> resultSelector)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).traverseDepthFirst({func})")]
	    public static EnumerableInstance<TSource> TraverseDepthFirst<TSource>(this IEnumerable<TSource> source,
	        Func<TSource, IEnumerable<TSource>> func)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).traverseDepthFirst({func}, {resultSelector})")]
	    public static EnumerableInstance<TResult> TraverseDepthFirst<TSource, TResult>(this IEnumerable<TSource> source,
	        Func<TSource, IEnumerable<TSource>> func, Func<TSource, TResult> resultSelector)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).traverseDepthFirst({func}, {resultSelector})")]
	    public static EnumerableInstance<TResult> TraverseDepthFirst<TSource, TResult>(this IEnumerable<TSource> source,
	        Func<TSource, IEnumerable<TSource>> func, Func<TSource, int, TResult> resultSelector)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).union({other})")]
	    public static EnumerableInstance<TSource> Union<TSource>(this IEnumerable<TSource> source,
	        IEnumerable<TSource> other)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).union({other}, {comparer})")]
	    public static EnumerableInstance<TSource> Union<TSource>(this IEnumerable<TSource> source,
	        IEnumerable<TSource> other, IEqualityComparer<TSource> comparer)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).where({predicate})")]
	    public static EnumerableInstance<TSource> Where<TSource>(this IEnumerable<TSource> source,
	        Func<TSource, bool> predicate)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).where({predicate})")]
	    public static EnumerableInstance<TSource> Where<TSource>(this IEnumerable<TSource> source,
	        Func<TSource, int, bool> predicate)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).zip({other}, {selector})")]
	    public static EnumerableInstance<TResult> Zip<TSource, TOther, TResult>(this IEnumerable<TSource> source,
	        IEnumerable<TOther> other, Func<TSource, TOther, TResult> selector)
	    {
	        return null;
	    }

	    [Template("Bridge.Linq.Enumerable.from({source}).zip({other}, {selector})")]
	    public static EnumerableInstance<TResult> Zip<TSource, TOther, TResult>(this IEnumerable<TSource> source,
	        IEnumerable<TOther> other, Func<TSource, TOther, int, TResult> selector)
	    {
	        return null;
	    }
    }
}
