'use strict';
describe('setTimeout', function () {
    it('should work with setTimeout', function (done) {
        var testZone = global.zone.fork({
            addTask: function (fn) { wtfMock.log.push('addTask ' + fn.id); },
            removeTask: function (fn) { wtfMock.log.push('removeTask ' + fn.id); },
            addRepeatingTask: function (fn) { wtfMock.log.push('addRepeatingTask ' + fn.id); },
            removeRepeatingTask: function (fn) { wtfMock.log.push('removeRepeatingTask ' + fn.id); },
        });
        var zId;
        var cancelId = '?';
        testZone.run(function () {
            zId = global.zone.$id;
            var timeoutFn = function () {
                var zCallbackId = global.zone.$id;
                // creates implied zone in all callbacks.
                expect(global.zone).toBeDirectChildOf(testZone);
                global.zone.setTimeoutUnpatched(function () {
                    expect(wtfMock.log).toEqual([
                        'addTask abc',
                        '# Zone#setTimeout(' + zId + ', ' + cancelId + ', 3)',
                        '> Zone#cb:setTimeout(' + zCallbackId + ', ' + cancelId + ', 3)',
                        'removeTask abc',
                        '< Zone#cb:setTimeout'
                    ]);
                    done();
                });
            };
            timeoutFn.id = 'abc';
            cancelId = setTimeout(timeoutFn, 3);
            expect(wtfMock.log[0]).toEqual('addTask abc');
            expect(wtfMock.log[1]).toEqual('# Zone#setTimeout(' + zId + ', ' + cancelId + ', 3)');
        });
    });
    it('should allow canceling of fns registered with setTimeout', function (done) {
        var spy = jasmine.createSpy('spy');
        var cancelId = setTimeout(spy, 0);
        clearTimeout(cancelId);
        setTimeout(function () {
            expect(spy).not.toHaveBeenCalled();
            done();
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0VGltZW91dC5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdGVzdC9wYXRjaC9zZXRUaW1lb3V0LnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBRWIsUUFBUSxDQUFDLFlBQVksRUFBRTtJQUVyQixFQUFFLENBQUMsNkJBQTZCLEVBQUUsVUFBVSxJQUFJO1FBRTlDLElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQzlCLE9BQU8sRUFBRSxVQUFTLEVBQUUsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBRSxDQUFDLENBQUMsQ0FBQztZQUNoRSxVQUFVLEVBQUUsVUFBUyxFQUFFLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckUsZ0JBQWdCLEVBQUUsVUFBUyxFQUFFLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqRixtQkFBbUIsRUFBRSxVQUFTLEVBQUUsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3hGLENBQUMsQ0FBQztRQUVILElBQUksR0FBRyxDQUFDO1FBQ1IsSUFBSSxRQUFRLEdBQU8sR0FBRyxDQUFDO1FBQ3ZCLFFBQVEsQ0FBQyxHQUFHLENBQUM7WUFDWCxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDdEIsSUFBSSxTQUFTLEdBQUc7Z0JBQ2QsSUFBSSxXQUFXLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQ2xDLHlDQUF5QztnQkFDekMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDaEQsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztvQkFDOUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7d0JBQzFCLGFBQWE7d0JBQ2Isb0JBQW9CLEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxRQUFRLEdBQUcsTUFBTTt3QkFDckQsdUJBQXVCLEdBQUcsV0FBVyxHQUFHLElBQUksR0FBRyxRQUFRLEdBQUcsTUFBTTt3QkFDaEUsZ0JBQWdCO3dCQUNoQixzQkFBc0I7cUJBQ3ZCLENBQUMsQ0FBQztvQkFDSCxJQUFJLEVBQUUsQ0FBQztnQkFDVCxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQztZQUNJLFNBQVUsQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO1lBQzVCLFFBQVEsR0FBRyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzlDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLG9CQUFvQixHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUcsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQ3hGLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsMERBQTBELEVBQUUsVUFBVSxJQUFJO1FBQzNFLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkMsSUFBSSxRQUFRLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNsQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkIsVUFBVSxDQUFDO1lBQ1QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ25DLElBQUksRUFBRSxDQUFDO1FBQ1QsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUVMLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5kZXNjcmliZSgnc2V0VGltZW91dCcsIGZ1bmN0aW9uICgpIHtcblxuICBpdCgnc2hvdWxkIHdvcmsgd2l0aCBzZXRUaW1lb3V0JywgZnVuY3Rpb24gKGRvbmUpIHtcblxuICAgIHZhciB0ZXN0Wm9uZSA9IGdsb2JhbC56b25lLmZvcmsoe1xuICAgICAgYWRkVGFzazogZnVuY3Rpb24oZm4pIHsgd3RmTW9jay5sb2cucHVzaCgnYWRkVGFzayAnICsgZm4uaWQgKTsgfSxcbiAgICAgIHJlbW92ZVRhc2s6IGZ1bmN0aW9uKGZuKSB7IHd0Zk1vY2subG9nLnB1c2goJ3JlbW92ZVRhc2sgJyArIGZuLmlkKTsgfSxcbiAgICAgIGFkZFJlcGVhdGluZ1Rhc2s6IGZ1bmN0aW9uKGZuKSB7IHd0Zk1vY2subG9nLnB1c2goJ2FkZFJlcGVhdGluZ1Rhc2sgJyArIGZuLmlkKTsgfSxcbiAgICAgIHJlbW92ZVJlcGVhdGluZ1Rhc2s6IGZ1bmN0aW9uKGZuKSB7IHd0Zk1vY2subG9nLnB1c2goJ3JlbW92ZVJlcGVhdGluZ1Rhc2sgJyArIGZuLmlkKTsgfSxcbiAgICB9KTtcblxuICAgIHZhciB6SWQ7XG4gICAgdmFyIGNhbmNlbElkOmFueSA9ICc/JztcbiAgICB0ZXN0Wm9uZS5ydW4oZnVuY3Rpb24oKSB7XG4gICAgICB6SWQgPSBnbG9iYWwuem9uZS4kaWQ7XG4gICAgICB2YXIgdGltZW91dEZuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgekNhbGxiYWNrSWQgPSBnbG9iYWwuem9uZS4kaWQ7XG4gICAgICAgIC8vIGNyZWF0ZXMgaW1wbGllZCB6b25lIGluIGFsbCBjYWxsYmFja3MuXG4gICAgICAgIGV4cGVjdChnbG9iYWwuem9uZSkudG9CZURpcmVjdENoaWxkT2YodGVzdFpvbmUpO1xuICAgICAgICBnbG9iYWwuem9uZS5zZXRUaW1lb3V0VW5wYXRjaGVkKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGV4cGVjdCh3dGZNb2NrLmxvZykudG9FcXVhbChbXG4gICAgICAgICAgICAnYWRkVGFzayBhYmMnLFxuICAgICAgICAgICAgJyMgWm9uZSNzZXRUaW1lb3V0KCcgKyB6SWQgKyAnLCAnICsgY2FuY2VsSWQgKyAnLCAzKScsXG4gICAgICAgICAgICAnPiBab25lI2NiOnNldFRpbWVvdXQoJyArIHpDYWxsYmFja0lkICsgJywgJyArIGNhbmNlbElkICsgJywgMyknLFxuICAgICAgICAgICAgJ3JlbW92ZVRhc2sgYWJjJyxcbiAgICAgICAgICAgICc8IFpvbmUjY2I6c2V0VGltZW91dCdcbiAgICAgICAgICBdKTtcbiAgICAgICAgICBkb25lKCk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgICg8YW55PnRpbWVvdXRGbikuaWQgPSAnYWJjJztcbiAgICAgIGNhbmNlbElkID0gc2V0VGltZW91dCh0aW1lb3V0Rm4sIDMpO1xuICAgICAgZXhwZWN0KHd0Zk1vY2subG9nWzBdKS50b0VxdWFsKCdhZGRUYXNrIGFiYycpO1xuICAgICAgZXhwZWN0KHd0Zk1vY2subG9nWzFdKS50b0VxdWFsKCcjIFpvbmUjc2V0VGltZW91dCgnICsgeklkICsgJywgJyArIGNhbmNlbElkICsgJywgMyknKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBhbGxvdyBjYW5jZWxpbmcgb2YgZm5zIHJlZ2lzdGVyZWQgd2l0aCBzZXRUaW1lb3V0JywgZnVuY3Rpb24gKGRvbmUpIHtcbiAgICB2YXIgc3B5ID0gamFzbWluZS5jcmVhdGVTcHkoJ3NweScpO1xuICAgIHZhciBjYW5jZWxJZCA9IHNldFRpbWVvdXQoc3B5LCAwKTtcbiAgICBjbGVhclRpbWVvdXQoY2FuY2VsSWQpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgZXhwZWN0KHNweSkubm90LnRvSGF2ZUJlZW5DYWxsZWQoKTtcbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfSk7XG5cbn0pO1xuIl19