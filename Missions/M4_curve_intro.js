function upper_three_quarters(pt) {
    return t => make_point(x_of(pt) + math_cos(2 * math_PI * 0.75 * t),y_of(pt) + math_sin(2 * math_PI * 0.75 * t));
}

function lower_three_quarters(pt) {
    return t => make_point(x_of(pt) + math_cos(2 * math_PI * (0.25-0.75 * t)),y_of(pt) + math_sin(2 * math_PI * (0.25-0.75 * t)));
}

function connector(curve1,curve2){
    // the result curve should be an abstraction of type (curve,curve) -> point
    return t => t < 0.5
        ? curve1(t * 2)
        : curve2(t * 2 - 1 );
}

function s_generator(pt) {
    // the t values from the draw_connected... will be passed here,
    // so there is a lambda function
    return t => connector(upper_three_quarters(make_point(x_of(pt),y_of(pt)+1)),lower_three_quarters(make_point(x_of(pt),y_of(pt)-1)))(t); 
}

// Test
draw_connected_full_view_proportional(200)(s_generator(make_point(0.5, 0.25)));
