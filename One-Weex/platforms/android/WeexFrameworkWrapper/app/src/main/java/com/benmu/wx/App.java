package com.benmu.wx;

import android.app.Application;

import com.alibaba.android.bindingx.plugin.weex.BindingX;
import com.benmu.framework.BMInitConfig;
import com.benmu.framework.BMWXApplication;
import com.benmu.framework.BMWXEngine;
import com.taobao.weex.common.WXException;

/**
 * Created by Carry on 2017/8/23.
 */

public class   App extends BMWXApplication {
    public Application mInstance;

    @Override
    public void onCreate() {
        super.onCreate();
        mInstance = this;
        try {
            BindingX.register();
        } catch (WXException e) {
            e.printStackTrace();
        }


    }

}
