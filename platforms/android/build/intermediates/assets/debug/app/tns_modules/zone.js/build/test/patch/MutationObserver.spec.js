var util_1 = require('../util');
describe('MutationObserver', util_1.ifEnvSupports('MutationObserver', function () {
    var elt;
    var testZone = global.zone.fork();
    beforeEach(function () {
        elt = document.createElement('div');
    });
    it('should run observers within the zone', function (done) {
        var ob;
        testZone.run(function () {
            ob = new MutationObserver(function () {
                expect(global.zone).toBeDirectChildOf(testZone);
                done();
            });
            ob.observe(elt, { childList: true });
        });
        elt.innerHTML = '<p>hey</p>';
    });
    it('should dequeue upon disconnect', function () {
        var ob;
        var flag = false;
        var childZone = global.zone.fork({
            dequeueTask: function () {
                flag = true;
            }
        });
        childZone.run(function () {
            ob = new MutationObserver(function () { });
            ob.observe(elt, { childList: true });
        });
        ob.disconnect();
        expect(flag).toBe(true);
    });
    it('should enqueue once upon observation', function () {
        var ob;
        var count = 0;
        var childZone = global.zone.fork({
            enqueueTask: function () {
                count += 1;
            }
        });
        childZone.run(function () {
            ob = new MutationObserver(function () { });
            expect(count).toBe(0);
        });
        ob.observe(elt, { childList: true });
        expect(count).toBe(1);
        ob.observe(elt, { childList: true });
        expect(count).toBe(1);
    });
    it('should only dequeue upon disconnect if something is observed', function () {
        var ob;
        var flag = false;
        var elt = document.createElement('div');
        var childZone = global.zone.fork({
            dequeueTask: function () {
                flag = true;
            }
        });
        childZone.run(function () {
            ob = new MutationObserver(function () { });
        });
        ob.disconnect();
        expect(flag).toBe(false);
    });
}));
describe('WebKitMutationObserver', util_1.ifEnvSupports('WebKitMutationObserver', function () {
    var testZone = global.zone.fork();
    it('should run observers within the zone', function (done) {
        var elt;
        testZone.run(function () {
            elt = document.createElement('div');
            var ob = new global.WebKitMutationObserver(function () {
                expect(global.zone).toBeDirectChildOf(testZone);
                done();
            });
            ob.observe(elt, { childList: true });
        });
        elt.innerHTML = '<p>hey</p>';
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXV0YXRpb25PYnNlcnZlci5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdGVzdC9wYXRjaC9NdXRhdGlvbk9ic2VydmVyLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUJBQTRCLFNBQVMsQ0FBQyxDQUFBO0FBRXRDLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRSxvQkFBYSxDQUFDLGtCQUFrQixFQUFFO0lBQzdELElBQUksR0FBRyxDQUFDO0lBQ1IsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUVsQyxVQUFVLENBQUM7UUFDVCxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxzQ0FBc0MsRUFBRSxVQUFVLElBQUk7UUFDdkQsSUFBSSxFQUFFLENBQUM7UUFFUCxRQUFRLENBQUMsR0FBRyxDQUFDO1lBQ1gsRUFBRSxHQUFHLElBQUksZ0JBQWdCLENBQUM7Z0JBQ3hCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2hELElBQUksRUFBRSxDQUFDO1lBQ1QsQ0FBQyxDQUFDLENBQUM7WUFFSCxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO1FBRUgsR0FBRyxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUM7SUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsZ0NBQWdDLEVBQUU7UUFDbkMsSUFBSSxFQUFFLENBQUM7UUFDUCxJQUFJLElBQUksR0FBRyxLQUFLLENBQUM7UUFDakIsSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDL0IsV0FBVyxF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SUFBSSxFQUFFLENBQUM7WUFDVCxDQUFDLENBQUMsQ0FBQztZQUVILEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUM7UUFFSCxHQUFHLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQztJQUMvQixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2lmRW52U3VwcG9ydHN9IGZyb20gJy4uL3V0aWwnO1xuXG5kZXNjcmliZSgnTXV0YXRpb25PYnNlcnZlcicsIGlmRW52U3VwcG9ydHMoJ011dGF0aW9uT2JzZXJ2ZXInLCBmdW5jdGlvbiAoKSB7XG4gIHZhciBlbHQ7XG4gIHZhciB0ZXN0Wm9uZSA9IGdsb2JhbC56b25lLmZvcmsoKTtcblxuICBiZWZvcmVFYWNoKGZ1bmN0aW9uICgpIHtcbiAgICBlbHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBydW4gb2JzZXJ2ZXJzIHdpdGhpbiB0aGUgem9uZScsIGZ1bmN0aW9uIChkb25lKSB7XG4gICAgdmFyIG9iO1xuXG4gICAgdGVzdFpvbmUucnVuKGZ1bmN0aW9uKCkge1xuICAgICAgb2IgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGV4cGVjdChnbG9iYWwuem9uZSkudG9CZURpcmVjdENoaWxkT2YodGVzdFpvbmUpO1xuICAgICAgICBkb25lKCk7XG4gICAgICB9KTtcblxuICAgICAgb2Iub2JzZXJ2ZShlbHQsIHsgY2hpbGRMaXN0OiB0cnVlIH0pO1xuICAgIH0pO1xuXG4gICAgZWx0LmlubmVySFRNTCA9ICc8cD5oZXk8L3A+JztcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBkZXF1ZXVlIHVwb24gZGlzY29ubmVjdCcsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb2I7XG4gICAgdmFyIGZsYWcgPSBmYWxzZTtcbiAgICB2YXIgY2hpbGRab25lID0gZ2xvYmFsLnpvbmUuZm9yayh7XG4gICAgICBkZXF1ZXVlVGFzazogZnVuY3Rpb24gKCkge1xuICAgICAgICBmbGFnID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNoaWxkWm9uZS5ydW4oZnVuY3Rpb24gKCkge1xuICAgICAgb2IgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAoKSB7fSk7XG4gICAgICBvYi5vYnNlcnZlKGVsdCwgeyBjaGlsZExpc3Q6IHRydWUgfSk7XG4gICAgfSk7XG5cbiAgICBvYi5kaXNjb25uZWN0KCk7XG4gICAgZXhwZWN0KGZsYWcpLnRvQmUodHJ1ZSk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgZW5xdWV1ZSBvbmNlIHVwb24gb2JzZXJ2YXRpb24nLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9iO1xuICAgIHZhciBjb3VudCA9IDA7XG4gICAgdmFyIGNoaWxkWm9uZSA9IGdsb2JhbC56b25lLmZvcmsoe1xuICAgICAgZW5xdWV1ZVRhc2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY291bnQgKz0gMTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNoaWxkWm9uZS5ydW4oZnVuY3Rpb24gKCkge1xuICAgICAgb2IgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAoKSB7fSk7XG4gICAgICBleHBlY3QoY291bnQpLnRvQmUoMCk7XG4gICAgfSk7XG5cbiAgICBvYi5vYnNlcnZlKGVsdCwgeyBjaGlsZExpc3Q6IHRydWUgfSk7XG4gICAgZXhwZWN0KGNvdW50KS50b0JlKDEpO1xuXG4gICAgb2Iub2JzZXJ2ZShlbHQsIHsgY2hpbGRMaXN0OiB0cnVlIH0pO1xuICAgIGV4cGVjdChjb3VudCkudG9CZSgxKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBvbmx5IGRlcXVldWUgdXBvbiBkaXNjb25uZWN0IGlmIHNvbWV0aGluZyBpcyBvYnNlcnZlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb2I7XG4gICAgdmFyIGZsYWcgPSBmYWxzZTtcbiAgICB2YXIgZWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdmFyIGNoaWxkWm9uZSA9IGdsb2JhbC56b25lLmZvcmsoe1xuICAgICAgZGVxdWV1ZVRhc2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZmxhZyA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjaGlsZFpvbmUucnVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIG9iID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKCkge30pO1xuICAgIH0pO1xuXG4gICAgb2IuZGlzY29ubmVjdCgpO1xuICAgIGV4cGVjdChmbGFnKS50b0JlKGZhbHNlKTtcbiAgfSk7XG59KSk7XG5cbmRlc2NyaWJlKCdXZWJLaXRNdXRhdGlvbk9ic2VydmVyJywgaWZFbnZTdXBwb3J0cygnV2ViS2l0TXV0YXRpb25PYnNlcnZlcicsIGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRlc3Rab25lID0gZ2xvYmFsLnpvbmUuZm9yaygpO1xuXG4gIGl0KCdzaG91bGQgcnVuIG9ic2VydmVycyB3aXRoaW4gdGhlIHpvbmUnLCBmdW5jdGlvbiAoZG9uZSkge1xuICAgIHZhciBlbHQ7XG5cbiAgICB0ZXN0Wm9uZS5ydW4oZnVuY3Rpb24oKSB7XG4gICAgICBlbHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgdmFyIG9iID0gbmV3IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZXhwZWN0KGdsb2JhbC56b25lKS50b0JlRGlyZWN0Q2hpbGRPZih0ZXN0Wm9uZSk7XG4gICAgICAgIGRvbmUoKTtcbiAgICAgIH0pO1xuXG4gICAgICBvYi5vYnNlcnZlKGVsdCwgeyBjaGlsZExpc3Q6IHRydWV9KTtcbiAgICB9KTtcblxuICAgIGVsdC5pbm5lckhUTUwgPSAnPHA+aGV5PC9wPic7XG4gIH0pO1xufSkpO1xuIl19