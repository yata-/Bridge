using Bridge;
using Bridge.Html5;
using Bridge.Test;

using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Bridge.ClientTest.Threading
{
    [Category(Constants.MODULE_THREADING)]
    [TestFixture(TestNameFormat = "Promise - {0}")]
    public class PromiseTests
    {
        private class SimplePromise : IPromise
        {
            public class A
            {
                public PromiseDelegate Filled { get; set; }
                public PromiseDelegate Error { get; set; }
                public PromiseDelegate Progress { get; set; }
            }

            enum Which
            {
                Resolve, Reject
            }

            private delegate void Next(PromiseDelegate fulfilledHandler, PromiseDelegate errorHandler = null, PromiseDelegate progressHandler = null);

            public delegate void PromiseDelegate(params object[] args);

            private Next DoThen;

            public List<A> Thens { get; private set; }

            public SimplePromise()
            {
                Thens = new List<A>();

                DoThen = (f, e, p) => 
                {
                    this.Thens.Add(new A() { Filled = f, Error = e, Progress = p });
                };
            }

            public void Then(Delegate fulfilledHandler, Delegate errorHandler = null, Delegate progressHandler = null)
            {
                DoThen((PromiseDelegate)fulfilledHandler, (PromiseDelegate)errorHandler, (PromiseDelegate)progressHandler);
            }

            public void Resolve(params object[] args)
            {
                Complete(Which.Resolve, args);
            }

            public void Reject(params object[] args)
            {
                Complete(Which.Reject, args);
            }

            private void Complete(Which which, params object[] args)
            {
                if (which == Which.Resolve)
                {
                    DoThen = (f, e, p) => { Resolve(args); };
                }
                else
                {
                    DoThen = (f, e, p) => { Reject(args); };
                }

                var i = 0;
                while (i < Thens.Count)
                {
                    var aThen = Thens[i];

                    if (which == Which.Resolve)
                    {
                        if (aThen.Filled != null)
                        {
                            aThen.Filled.Apply(null, args);
                        }
                    }
                    else
                    {
                        if (aThen.Error != null)
                        {
                            aThen.Error.Apply(null, args);
                        }
                    }
                    i++;
                }
                Thens.Clear();
            }
        }

        private SimplePromise CreatePromise()
        {
            return new SimplePromise();
        }

        [Test(ExpectedCount = 7)]
        public void TaskFromPromiseWithoutResultFactoryWorksWhenPromiseCompletes()
        {
            var completeAsync = Assert.Async();

            var promise = CreatePromise();
            var task = Task.FromPromise(promise);
            Assert.AreEqual(task.Status, TaskStatus.Running, "Task should be running after being created");
            bool continuationRun = false;
            task.ContinueWith(t =>
            {
                Assert.True(t == task, "ContinueWith parameter should be correct");
                continuationRun = true;
            });

            Global.SetTimeout(() =>
            {
                Assert.False(continuationRun, "Continuation should not be run too early.");
                Assert.AreEqual(task.Status, TaskStatus.Running, "Task should be running before promise is completed.");
                promise.Resolve(42, "result 123", 101);
            }, 100);

            Global.SetTimeout(() =>
            {
                Assert.AreEqual(task.Status, TaskStatus.RanToCompletion, "Task should be completed after promise");
                Assert.True(continuationRun, "Continuation should have been run after promise was completed.");
                Assert.AreDeepEqual(task.Result, new object[] { 42, "result 123", 101 }, "The result should be correct");

                completeAsync();
            }, 200);
        }

        //[Test(ExpectedCount = )]
        //public void TaskFromPromiseWithResultIndexWorksWhenPromiseCompletes()
        //{
        //    var promise = CreatePromise();
        //    var tasks = new Task<int>[] {
        //        Task.FromPromise<int>(promise),//,  0),
        //        Task.FromPromise<int>(promise),//,  1),
        //        Task.FromPromise<int>(promise),//,  2),
        //        Task.FromPromise<int>(promise),//, -3),
        //        Task.FromPromise<int>(promise),//, -2),
        //        Task.FromPromise<int>(promise),//, -1),
        //    };
        //    var continuationsRun = new bool[6];
        //    Assert.True(tasks.Every(t => t.Status == TaskStatus.Running), "Tasks should be running after being created");
        //    tasks.ForEach((x, i, _) => x.ContinueWith(t =>
        //    {
        //        Assert.True(t == x, "ContinueWith parameter should be correct");
        //        continuationsRun[i] = true;
        //    }));

        //    Global.SetTimeout(() =>
        //    {
        //        Assert.False(continuationsRun.Some(x => x), "Continuations should not be run too early.");
        //        Assert.True(tasks.Every(t => t.Status == TaskStatus.Running), "Tasks should be running before promise is completed.");
        //        promise.Resolve(10, 42, 38);
        //    }, 100);

        //    Global.SetTimeout(() =>
        //    {
        //        Assert.True(tasks.Every(t => t.Status == TaskStatus.RanToCompletion), "Task should be completed after promise");
        //        Assert.True(continuationsRun.Every(x => x), "Continuations should have been run after promise was completed.");
        //        Assert.AreEqual(tasks[0].Result, 10, "Task 0 result should be correct");
        //        Assert.AreEqual(tasks[1].Result, 42, "Task 1 result should be correct");
        //        Assert.AreEqual(tasks[2].Result, 38, "Task 2 result should be correct");
        //        Assert.AreEqual(tasks[3].Result, 10, "Task 3 result should be correct");
        //        Assert.AreEqual(tasks[4].Result, 42, "Task 4 result should be correct");
        //        Assert.AreEqual(tasks[5].Result, 38, "Task 5 result should be correct");
        //        completeAsync();
        //    }, 200);
        //}

        //[Test(ExpectedCount = )]
        //public void TaskFromPromiseWithResultFactoryWorksWhenPromiseCompletes()
        //{
        //    var promise = CreatePromise();
        //    var task = Task.FromPromise(promise, (int i, string s, int j) => new
        //    {
        //        i,
        //        s,
        //        j
        //    });
        //    Assert.AreEqual(task.Status, TaskStatus.Running, "Task should be running after being created");
        //    bool continuationRun = false;
        //    task.ContinueWith(t =>
        //    {
        //        Assert.True(t == task, "ContinueWith parameter should be correct");
        //        continuationRun = true;
        //    });

        //    Global.SetTimeout(() =>
        //    {
        //        Assert.False(continuationRun, "Continuation should not be run too early.");
        //        Assert.AreEqual(task.Status, TaskStatus.Running, "Task should be running before promise is completed.");
        //        promise.Resolve(42, "result 123", 101);
        //    }, 100);

        //    Global.SetTimeout(() =>
        //    {
        //        Assert.AreEqual(task.Status, TaskStatus.RanToCompletion, "Task should be completed after promise");
        //        Assert.True(continuationRun, "Continuation should have been run after promise was completed.");
        //        Assert.AreEqual(task.Result, new
        //        {
        //            i = 42,
        //            s = "result 123",
        //            j = 101
        //        });
        //        completeAsync();
        //    }, 200);
        //}

        [Test(ExpectedCount = 10)]
        public void TaskFromPromiseWorksWhenPromiseFails()
        {
            var completeAsync = Assert.Async();

            var promise = CreatePromise();
            var task = Task.FromPromise(promise);
            Assert.AreEqual(task.Status, TaskStatus.Running, "Task should be running after being created");
            bool continuationRun = false;
            task.ContinueWith(t =>
            {
                Assert.True(t == task, "ContinueWith parameter should be correct");
                continuationRun = true;
            });

            Global.SetTimeout(() =>
            {
                Assert.False(continuationRun, "Continuation should not be run too early.");
                Assert.AreEqual(task.Status, TaskStatus.Running, "Task should be running before promise is completed.");
                promise.Reject(42, "result 123", 101);
            }, 100);

            Global.SetTimeout(() =>
            {
                Assert.AreEqual(task.Status, TaskStatus.Faulted, "Task should have faulted after the promise was rejected.");
                Assert.True(continuationRun, "Continuation should have been run after promise was rejected.");
                Assert.True((object)task.Exception is AggregateException, "Exception should be an AggregateException");
                Assert.AreEqual(task.Exception.InnerExceptions.Count, 1, "Exception should have one inner exception");
                Assert.True(task.Exception.InnerExceptions[0] is PromiseException, "Inner exception should be a PromiseException");
                Assert.AreDeepEqual(((PromiseException)task.Exception.InnerExceptions[0]).Arguments, new object[] { 42, "result 123", 101 }, "The PromiseException arguments should be correct");

                completeAsync();
            }, 200);
        }

        [Test(ExpectedCount = 2)]
        public async void CompletingPromiseCanBeAwaited()
        {
            var completeAsync = Assert.Async();

            var promise = CreatePromise();
            object[] result = null;

            Global.SetTimeout(() =>
            {
                Assert.True(result == null, "Await should not finish too early.");
                promise.Resolve(42, "result 123", 101);
            }, 100);

            Global.SetTimeout(() =>
            {
                Assert.AreEqual(result, new object[] { 42, "result 123", 101 }, "The result should be correct");
                completeAsync();
            }, 200);

            result = await promise;
        }

        [Test(ExpectedCount = 3)]
        public async void FailingPromiseCanBeAwaited()
        {
            var completeAsync = Assert.Async();

            var promise = CreatePromise();
            bool continuationRun = false;

            Global.SetTimeout(() =>
            {
                Assert.False(continuationRun, "Continuation should not be run too early.");
                promise.Reject(42, "result 123", 101);
            }, 100);

            Global.SetTimeout(() =>
            {
                Assert.True(continuationRun, "Continuation should have been run after promise was rejected.");
                completeAsync();
            }, 200);

            try
            {
                await promise;
                Assert.Fail("Await should throw");
            }
            catch (PromiseException ex)
            {
                Assert.AreEqual(ex.Arguments, new object[] { 42, "result 123", 101 }, "The PromiseException arguments should be correct");
            }
            catch (Exception ex)
            {
                Assert.Fail("Thrown exception should have been an AggregateException, was " + ex.GetClassName());
            }
            continuationRun = true;
        }
    }
}
