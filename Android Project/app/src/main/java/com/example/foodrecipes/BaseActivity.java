package com.example.foodrecipes;
/*Mandatory Imports Below*/
import androidx.appcompat.app.AppCompatActivity;
import androidx.constraintlayout.widget.ConstraintLayout;

import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.FrameLayout;
import android.widget.ProgressBar;

/*Its abstract since this is not a regular activity, but a base activity that will be reused
* abstract classes cant be instantiated but only extended by a child class*/
/*Since this is a reusable component it would make sense to extend this wherever needed*/
public abstract class BaseActivity extends AppCompatActivity {
    public ProgressBar mProgressBar;

    @Override
    public void setContentView(int layoutResID) {
        ConstraintLayout constraintLayout = (ConstraintLayout) getLayoutInflater().inflate(R.layout.activity_base,null);
        FrameLayout frameLayout=constraintLayout.findViewById(R.id.activity_content);
        mProgressBar=constraintLayout.findViewById(R.id.progress_bar);
        getLayoutInflater().inflate(layoutResID,frameLayout,true);

        super.setContentView(layoutResID);
    }

/*Method below is to show progress Bar*/
    public void showProgressBar(boolean visibility){
        mProgressBar.setVisibility(visibility?View.VISIBLE :View.INVISIBLE);

    }
}
