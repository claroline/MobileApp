package com.tns.gen.android.support.v4.widget;

public class SwipeRefreshLayout_OnRefreshListener implements android.support.v4.widget.SwipeRefreshLayout.OnRefreshListener {
	public SwipeRefreshLayout_OnRefreshListener() {
		com.tns.Runtime.initInstance(this);
	}

	public void onRefresh()  {
		java.lang.Object[] args = null;
		com.tns.Runtime.callJSMethod(this, "onRefresh", void.class, args);
	}

}
