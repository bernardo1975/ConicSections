var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-history",
  "level": "1",
  "url": "sec-history.html",
  "type": "Section",
  "number": "1.1",
  "title": "History",
  "body": " History   Apollonius of Perga (c. 262 BC c. 190 BC), a Greek geometer and astronomer, wrote eight books on Conics , influencing many later scholars. Beginning from the theories of Euclid and Archimedes on the topic, he brought them to the state they were in just before the invention of analytic geometry In classical mathematics, analytic geometry , also known as coordinate geometry , is the study of geometry using a coordinate system and analytical methods (functions, derivatives, etc.). Analytic geometry was independently invented by René Descartes and Pierre de Fermat around 1637,although Descartes is sometimes given sole credit. . His definitions of the terms ellipse , parabola , and hyperbola are the ones in use today.   "
},
{
  "id": "sec-history-2",
  "level": "2",
  "url": "sec-history.html#sec-history-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "analytic geometry "
},
{
  "id": "sec-conic-sections",
  "level": "1",
  "url": "sec-conic-sections.html",
  "type": "Section",
  "number": "1.2",
  "title": "Conic Sections",
  "body": " Conic Sections   A conic section is a curve obtained by the intersection of the surface of a circular cone and a plane (not passing through the vertex, also called the apex , of the cone).    If the cone is cut by a plane that has the same slope as the cone (see picture above), then the intersection is a parabola ; if the slope of the plane is less steep, then the intersection is an ellipse (and, as special case, if the plane is horizontal, a circle ); and if the slope of the plane is steeper, then the intersection is a hyperbola .  Since the circular cone can be described as the set of points in three-dimensional space that satisfy for an appropriate (and we note that is the slope of the cone), one can check that all these conic sections can be described as points in the plane that satisfy some quadratic equation with some appropriate constants ; in fact, by choosing the coordinate system appropriately (i.e., by rotating and translating the curves here appropriately, i.e., by looking at a congruent copy of the curve), we actually only We are discarding cases here where the quadratic equation reduces to equations of lines, or yields only a point or even the empty set (i.e., has no solution) or the whole plane. have to consider the three equations which describes an ellipse, which describes a hyperbola, and which describes a parabola, where and are positive constants. While this classification with respect to quadratic equations is useful, there are other geometrical ways to describe these curves.  In this project, we will look at the geometry of conic sections using GeoGebra. We are interested in their geometrical properties, properties they share and that distinguish them from each other. We will then explore their applications in physics, astronomy and other technical fields using SageMath\/Python.  "
},
{
  "id": "def-conicsection",
  "level": "2",
  "url": "sec-conic-sections.html#def-conicsection",
  "type": "Definition",
  "number": "1.2.1",
  "title": "",
  "body": " A conic section is a curve obtained by the intersection of the surface of a circular cone and a plane (not passing through the vertex, also called the apex , of the cone).  "
},
{
  "id": "sec-conic-sections-4",
  "level": "2",
  "url": "sec-conic-sections.html#sec-conic-sections-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "parabola ellipse circle hyperbola "
},
{
  "id": "sec-geogebra",
  "level": "1",
  "url": "sec-geogebra.html",
  "type": "Section",
  "number": "1.3",
  "title": "GeoGebra",
  "body": " GeoGebra  You find the conic sections (after possibly scrolling down and selecting \"MORE\") in its own section on GeoGebra :   If you downloaded GeoGebra and use it locally on your computer, you find the conic sections in the following tool menu in GeoGebra (the seventh from the left):   There are four conic section tools under this menu: One for each of the conic sections ellipse , parabola and hyperbola , and a general tool called conic through 5 points . The last one is the actual icon for GeoGebra!    Circles are special case of conic sections. The tools dealing with circles can be found in the tool menu to the left\/above of conic sections.  It is probably the easiest to create a GeoGebra file for each of the three conic sections although you can also do it in one file and then use check boxes or buttons (like we learnt in the course) to show one construction while hiding the others. Even if you create separate GeoGebra files for each conic section, you should use check boxes , buttons , etc. to show\/hide the different tasks and constructions for each of them.  "
},
{
  "id": "sec-parabola-geogebra",
  "level": "1",
  "url": "sec-parabola-geogebra.html",
  "type": "Section",
  "number": "2.1",
  "title": "Parabola in GeoGebra",
  "body": " Parabola in GeoGebra   Drawing a Parabola  In GeoGebra, we construct a parabola by choosing a point, called the focus , together with a line, the directrix . Among other things, we will discuss the significance of these two objects here, but let us first construct a parabola: While you can choose any point and line (no matter of what slope), it might be useful to choose a point on the -axis as focus and the -axis as directrix. So, please, construct these in GeoGebra and then use the parabola tool to draw the parabola.   We first explore how this construction and the quadratic equation with some parameters and are related: Check that the vertex (i.e., the extremal point, thus the minimum or maximum) of the parabola is given by the midpoint between the origin and the focus . Then by looking at the equation of the parabola (and possibly changing in which for this equation is displayed by going to Settings > Algebra for the parabola) answer the following questions: Can you express the constant in terms of -coordinate of ? Can you also express the parameter in terms of that same -coordinate of ?  This shows that the parameters in the quadratic equation (or any quadratic equation describing a parabola) can be easily calculated from the location of in relation to the directrix. However, we can make the geometrical relation between focus, directrix and parabola even more concrete.    A Defining Property of a Parabola  We have just seen that the vertex of the parabola has the property that it has its distance to the focus is the same as its distance to the directrix. We now check that this is true for any point  on the parabola: Attach a point to the parabola, and check that the distance and the distance from to the directrix (your -axis) is the same.   Underlying this observation is the following geometrical definition of the parabola.   A parabola is the equidistant set (or midset ) to a fixed point (the focus ) and a line (the directrix ) not containing this point; i.e., the parabola is the locus A locus is a set of points whose location is determined by one or more specified conditions. For the parabola, this condition is the equal distance to the focus and the directrix. of those points in the plane that have the same distance from the focus and the directrix.   Let us explain this result in different words. You are properly familiar with the perpendicular bisector of a line joining two points and : Any of the points on the bisector has the same distance from the point as it has from the point . If you replace one of these two points, say , with a straight line (not passing through ), you can ask the same question again: Which points in the plane have the same distance to as they have to the line? The answer is: All points of the parabola that has as focus and the line as its directrix.    There is only one Parabola (up to similarity)  How different are parabolas from each other? Maybe you remember the following SageMath code where we plotted a regular parabola and a skinny one in SageMath Lecture 2 : Despite this, we will now check that all parabolas are similar to each other: Given any two parabolas, you can translate and rotate one of them such that its directrix coincides with the directrix of the other one. What you end up with is the following situation of two parabolas: One we already have with focus , and another one with a different focus, let us say , both foci on the -axis. So, construct this second parabola with focus on the -axis. Then using the dilate from point tool (from which point? by which factor?), show that one of the parabolas is just a scaled copy of the other.   So, all parabolas are similar to each other they all have the same shape !    A Property with many Applications  We now consider the original parabola with focus and point on it again. Find the tangent to the parabola at , the line that is perpendicular to the directrix and passes through , and the segment joining and . Measure the angle at between and the tangent , and the angle between and the tangent , and make note of your observation as you move along the parabola (hint: you might consider adding additional points on the lines to measure the angles nicely then hide the points again).   With the observation you just made, you should now be able to understand the following explanation for parabolic mirrors used in reflecting telescopes, flashlights, and car headlights: In an astronomical telescope, parallel rays of light coming into a parabolic mirror are focused at a point . This is due to the laws of optics since a ray of light is reflected on the parabolic surface of the mirror according to the rule that the incoming angle equals the outgoing angle of the ray (which is the observation we just made). For flashlights and car headlights the ray of lights go the other way: the bulb is located at the focus and when turned on, parallel and thus bundled rays of light leave the parabolic reflector.    Osculating Circles & Evolute  Finally, we have some fun with the osculating circle. Find the osculating circle to the parabola at the point (you can either go through the construction we did during the semester, or there is also a convenient GeoGebra command that will draw the it). Also find the the center of the osculating circle. By construction, the line passing through and is the normal to the parabola at , i.e., the line perpendicular to the tangent to the parabola at .  Instead of the whole normal line that passes through and here, we only draw a ray originating from and passing through .   Now, let us concentrate on this normal (hide most of the other stuff): Select \"Trace On\" in its properties (right-click on it), and then move the point fairly fast across the parabola. Your picture should look something like this:   Do you see a kind of curve appearing in the above picture? If you are not satisfied with your outcome and want another try, then go to \"Refresh View\" in the \"View\" menu.  Now, refresh the view, hide the normal, but show the center of the osculating circle and now check out what kind of curve the point \"traces out\" as you move (very slowly this time) along the parabola. This curve is called the evolute .   The locus of all the centers of the osculating circles, is called the evolute of the given curve.   Our construction above confirms an observation we made during the semester for other curves: An evolute is the envelope An envelope of a (planar) family of curves is a curve that is tangent to each member of the family at some point, and these points of tangency together form the whole envelope. of the normals to a curve.    "
},
{
  "id": "subsec-parabola-geogebra-intro-2",
  "level": "2",
  "url": "sec-parabola-geogebra.html#subsec-parabola-geogebra-intro-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "focus directrix "
},
{
  "id": "def-parabola",
  "level": "2",
  "url": "sec-parabola-geogebra.html#def-parabola",
  "type": "Definition",
  "number": "2.1.1",
  "title": "",
  "body": " A parabola is the equidistant set (or midset ) to a fixed point (the focus ) and a line (the directrix ) not containing this point; i.e., the parabola is the locus A locus is a set of points whose location is determined by one or more specified conditions. For the parabola, this condition is the equal distance to the focus and the directrix. of those points in the plane that have the same distance from the focus and the directrix.  "
},
{
  "id": "subsec-parabola-geogebra-property-6",
  "level": "2",
  "url": "sec-parabola-geogebra.html#subsec-parabola-geogebra-property-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "perpendicular bisector "
},
{
  "id": "def-evolute",
  "level": "2",
  "url": "sec-parabola-geogebra.html#def-evolute",
  "type": "Definition",
  "number": "2.1.2",
  "title": "",
  "body": " The locus of all the centers of the osculating circles, is called the evolute of the given curve.  "
},
{
  "id": "subsec-parabola-geogebra-evolute-10",
  "level": "2",
  "url": "sec-parabola-geogebra.html#subsec-parabola-geogebra-evolute-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "envelope "
},
{
  "id": "sec-parabola-sports",
  "level": "1",
  "url": "sec-parabola-sports.html",
  "type": "Section",
  "number": "2.2",
  "title": "Parabola in Sports",
  "body": " Parabola in Sports  In many sports, an object is \"thrown\": a ball, a discus, a hammer, a javelin etc. A shot is \"put\", and the long jump may be considered as \"throwing one's own body\" as far as possible. Often the goal is to obtain the maximal distance, while sometimes a certain target must be hit (e.g., in darts, golf, basketball). Let us concentrate on the former situation here.  By an ideal projectile motion we mean the motion of an object (or projectile ) that moves along the path under the action of gravity only; the influence of friction, air drag or other aerodynamical influences is not considered (although they, in reality, play a significant role as we have seen in Digression 4: Throwing a Ball ).  The following situation should sound familiar from what we have done during the semester: We launch the projectile from the height with an initial velocity at a launch angle . The horizontal and vertical components of the initial velocity are then and . There is only an acceleration in the vertical direction, downwards, due to gravity, given by where is the acceleration due to gravity on the surface of the earth (given by the value ). The minus sign in signifies that the acceleration is downwards (towards the center of the Earth). Since the acceleration is the time derivative of the velocity, integration yields that horizontal velocity remains unchanged at , while the vertical velocity changes linearly as time progresses according to .  Integrating the horizontal and vertical velocities again with respect to the time , yields the horizontal and vertical displacements at time . The horizontal displacement is given by while the vertical displacement taking the initial height into account is given by   Let us explore this projectile motion now in Python\/SageMath: We define a function f that has arguments v0 , alpha and t as well as b (the last one with a default value of 0 ). It should return the tuple (x,y) , i.e., the - and -coordinates of the projectile at time . Note that cosine and sine take angles in radians not degrees, so if you want to measure your angles in degrees you have to multiply by a factor of in the above formulae.  We can now explore the motion of your projectile for different values of v0 and alpha (we let b=0 for the moment). You can plot the path your projectile will take by using a parametric_plot . We fix a value of and then by varying the value of find the angle where we obtain the maximal horizontal range (i.e., we find the value of $x(t)$ where we have $y(t)=0$, i.e., where the projectile returned to the -axis).   The picture above shows the parabolic paths of projectiles with the same initial velocity v0=10 but different angles (in steps of ). What distance do you get for which throwing angle ?  You should see that for a projectile to hit the ground (i.e., ) at a certain distance, you either have none, one or two In military science, the two possibilites are called direct fire and plunging fire . In many of the (early) Artillery-style computer games the player(s) had to use plunging fire to be vitorious. angles for a given initial velocity (there is only one angle to achieve the maximal distance).  In the above formula, we can make the subject in and then plug this into the formula for to obtain Clearly, the right-hand side is a quadratic polynomial in , and therefore the function (now a function of instead of ) is therefore indeed a parabola. So, alternatively to the above parametric_plot , you can also do a normal plot using this function with the same result.   Furthermore, we can now easily calculate the horizontal range , i.e., the value of (greater than ) where the projectile returned to the -axis (that is, where we have ): This is amounts to solving the quadratic equation for and only considering the positive larger root. Remember that we have done something like this in one of the quizzes?  The formula that one obtains for the horizontal range is For this reduces to (using trig identities) and thus we obtain the maximal horizontal range for the angle . Note that the initial velocity enters quadratically in this maximal range this is the reason why athletes practice so much to achieve their maximal \"push\" at the moment they are realeasing the object they are throwing!  If the initial height is not zero, then one can find the maximal horizontal range and the optimal angle by differentiating the above expression for with respect to , setting it equal to zero and solving the equation obtained. Without going through the steps here, the maximal horizontal range is then given by The optimal angle to obtain this maximal horizontal range is or (Again note, the the angle here is given in radians, so you might want to multiply this result by to obtain degrees.)  Let us explore these formulae:  Check that for a fixed value the optimal angle is an increasing function in , but also less than with (so, only for high velocities the optimal angle is close to .  Check that for a given initial velocity , the optimal angle is a descreasing function in (with for ).  Also, fix a value of , and plot as a function of . Do you observe that except for very small values of  this function is essentially a quadratic function? So again, the initial velocity enters quadratically in the maximal range.    Due to athlete's technique and muscular system, aerodynamic effects on the object etc., the optimal angles will actually differ from the above optimal formula achieving a higher initial velocity is usually better than achieving the exact optimal angle. Measured values for different sports can be found in the following table:   Measured parameters for different sports    Sport  (in )  (in )  (in m)    shot put 38-42 14-15 2.2-2.4   discus throw 35-37 25-28 1.8-2.0   javelin throw 34-36 32-38 2.0-2.2   hammer throw 44 25-30 2.0-2.2   golf 20 70 0.0   long jump 20 6-7 1.0-1.2   football (soccer) 36-37 28 0.0   baseball (home run) 24-34 43-47 0.7-1.0    "
},
{
  "id": "sec-parabola-sports-3",
  "level": "2",
  "url": "sec-parabola-sports.html#sec-parabola-sports-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "ideal projectile motion "
},
{
  "id": "sec-parabola-sports-5",
  "level": "2",
  "url": "sec-parabola-sports.html#sec-parabola-sports-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "displacements "
},
{
  "id": "sec-parabola-sports-11",
  "level": "2",
  "url": "sec-parabola-sports.html#sec-parabola-sports-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "horizontal range "
},
{
  "id": "table-sports",
  "level": "2",
  "url": "sec-parabola-sports.html#table-sports",
  "type": "Table",
  "number": "2.2.1",
  "title": "",
  "body": " Measured parameters for different sports    Sport  (in )  (in )  (in m)    shot put 38-42 14-15 2.2-2.4   discus throw 35-37 25-28 1.8-2.0   javelin throw 34-36 32-38 2.0-2.2   hammer throw 44 25-30 2.0-2.2   golf 20 70 0.0   long jump 20 6-7 1.0-1.2   football (soccer) 36-37 28 0.0   baseball (home run) 24-34 43-47 0.7-1.0   "
},
{
  "id": "sec-ellipse-geogebra",
  "level": "1",
  "url": "sec-ellipse-geogebra.html",
  "type": "Section",
  "number": "3.1",
  "title": "Ellipse in GeoGebra",
  "body": " Ellipse in GeoGebra   Drawing an Ellipse  In GeoGebra, we construct an ellipse by choosing two points, the two foci , together with a point on the ellipse. Among other things, we will discuss the significance of the two foci here, but first we construct an ellipse. It might be useful to choose the two foci and to lie on a horizontal line, e.g., the -axis, and symmetrical around the origin. Then choose a third point, say through which the ellipse should pass (you can immediately hide this point again you only need it when you want to change the ellipse itself).   We now attach a point on the ellipse that we can control with an angular slider : First, we find the midpoint between and (it should be origin if you placed the two foci symmetrical around the origin) this point is called the center of the ellipse. Next, add a slider to your construction that let's you vary an angle between and . Use this value of to construct an angle at the origin measured counterclockwise from the -axis a point should appear that (together with the size of the angle ) you can now control with your slider. Add an ray originating from the center through that point . Finally, the intersection of this ray with the ellipse is the point we are looking for and its location on the ellipse can now be controlled by the slider!   Measure the distances and . Observe that as you move around the ellipse, the sum of the two distances is constant. In fact, this is one way to define an ellipse.   An ellipse is the locus of those points of the plane whose sum of distances to two fixed points and (the two foci of the ellipse) is constant.   This definition immediately yields the following \" gardener's method \" (also known as \" thumbtack construction \"): an ellipse can be constructed using two pins and a string.     The Parts of an Ellipse  We need some more vocabulary. Ellipses have two axes of symmetry ; the larger one, called the major axis of an ellipse, is the segment through the two foci connecting two antipodal points (the vertices ) of the ellipse, the smaller one, called the minor axis of an ellipse, is the segment perpendicular to the major axis through the center connecting antipodal points on the ellipse. Half the respective segment from the center to the point on the ellipse are called the semi-major axis and semi-minor axis , respectively. The length of the semi-major axis is usually denoted (so the major axis has length ), the length of the semi-minor axis is usually denoted . Previously, we looked at the sum of the distances and : This sum can actually be expressed in terms of and\/or , how? Also, measure the distance from the center to one of the foci or , this length is called linear eccentricity  . Can you explain why ?   The Don't use the letter in GeoGebra though, since that is reserved for Euler's constant.  eccentricity  of the ellipse is given by , i.e., the ratio of the distance from the center to a focus to the length of the semi-major axis. Obviously, this ratio is a number between and (less than) .  Measure the distance from your focus to its nearest vertex (see picture above). We call that distance . Now, construct a circle of radius around this vertex, and denote the point of intersection with the line through the two foci (i.e., along the major axis this should be your -axis) on the outside of the ellipse by . Draw the line perpendicular to the major axis through this point . This perpendicular line is called a directrix of the ellipse. We now measure the distance from the focus to the point on the ellipse, and compare it with the distance of from the directrix (hint: construct a perpendicular line to the directrix through }) by looking at the ratio of these two distances. Can you now complete an alternative geometrical definition of an ellipse?   An ellipse is the locus of those points of the plane for which the ratio of      Ellipse as an Equidistant Set  There is another alternative definition of an ellipse: Consider the ellipse with the two foci and together with a point on the ellipse. Construct a ray originating from through the point . Then construct the circle centered at through the other focus . Denote the intersection point of the ray with this circle by (be careful, you might get two intersection points we want the one that is on the opposite side as to ). Now, locate the \"Locus\" tool (you should find it in the \"Construct\" tool section, below \"points\" and above \"Lines\", or if you installed GeoGebra locally on your computer in the fourth tool menu from the left):   Using this tool, select the point as your locus point together with the angular slider. The result If you select \"Trace On\" for the point , and then move the point around the ellipse, you will \"trace\" this locus. is an object (probably automatically named something like \"loc1\") that looks like a circle. Check that indeed it is circle, centered at , and observe how the (smaller) circle around through  rolls inside this bigger circle, touching it at the point . Thus, the smaller circle centered at tells you that the distance and the distance from to the bigger circle (centered at , and which contains ) are the same. Can you now complete our third definition of an ellipse?   An ellipse is the equidistant set (or midset ) to      Foci of an Ellipse  Let us finally check whether the name focus is justified for either of the points and : So, only consider the ellipse with the two foci and together with a point on the ellipse. Construct the tangent to the ellipse at . Compare the angles between and the line through and , and between and the line through and . What is your observation (using your slider, move around the ellipse)? What does this last observation mean in terms of rays of light emitted from a lightbulb located at one of the foci and reflected on the (inside of) the ellipse?    "
},
{
  "id": "subsec-ellipse-geogebra-intro-2",
  "level": "2",
  "url": "sec-ellipse-geogebra.html#subsec-ellipse-geogebra-intro-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "foci "
},
{
  "id": "subsec-ellipse-geogebra-intro-4",
  "level": "2",
  "url": "sec-ellipse-geogebra.html#subsec-ellipse-geogebra-intro-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "center "
},
{
  "id": "def-ellipse1",
  "level": "2",
  "url": "sec-ellipse-geogebra.html#def-ellipse1",
  "type": "Definition",
  "number": "3.1.1",
  "title": "",
  "body": " An ellipse is the locus of those points of the plane whose sum of distances to two fixed points and (the two foci of the ellipse) is constant.  "
},
{
  "id": "subsec-ellipse-geogebra-intro-8",
  "level": "2",
  "url": "sec-ellipse-geogebra.html#subsec-ellipse-geogebra-intro-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "gardener's method thumbtack construction "
},
{
  "id": "subsec-ellipse-geogebra-parts-2",
  "level": "2",
  "url": "sec-ellipse-geogebra.html#subsec-ellipse-geogebra-parts-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "major axis vertices minor axis semi-major axis semi-minor axis linear eccentricity "
},
{
  "id": "subsec-ellipse-geogebra-parts-4",
  "level": "2",
  "url": "sec-ellipse-geogebra.html#subsec-ellipse-geogebra-parts-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "eccentricity "
},
{
  "id": "subsec-ellipse-geogebra-parts-5",
  "level": "2",
  "url": "sec-ellipse-geogebra.html#subsec-ellipse-geogebra-parts-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "directrix "
},
{
  "id": "def-ellipse2",
  "level": "2",
  "url": "sec-ellipse-geogebra.html#def-ellipse2",
  "type": "Definition",
  "number": "3.1.2",
  "title": "",
  "body": " An ellipse is the locus of those points of the plane for which the ratio of  "
},
{
  "id": "def-ellipse3",
  "level": "2",
  "url": "sec-ellipse-geogebra.html#def-ellipse3",
  "type": "Definition",
  "number": "3.1.3",
  "title": "",
  "body": " An ellipse is the equidistant set (or midset ) to  "
},
{
  "id": "sec-ellipse-astronomy",
  "level": "1",
  "url": "sec-ellipse-astronomy.html",
  "type": "Section",
  "number": "3.2",
  "title": "Ellipse in Astronomy",
  "body": " Ellipse in Astronomy  Based on Tycho Brahe's excellently accurate and comprehensive astronomical and planetary observations, Johannes Kepler formulated the three Kepler's laws of planetary motion between 1609 and 1619:  The orbit of a planet is an ellipse with the Sun at one of the two foci.  A line segment joining a planet and the Sun sweeps out equal areas during equal intervals of time.  The square of the orbital period of a planet is proportional to the cube of the semi-major axis of its orbit.  The first two laws are contained in his book Astronomia Nova (\"New Astronomy\"), published in 1609, based on Tycho Brahe's accurate observations of Mars Mars coincidentally has the second highest eccentricity ( ) of all planets after Mercury ( ). , while the third law is contained in his book Harmonices Mundi (\"The Harmony of the World\"), published in 1619. Sir Isaac Newton obtained a theoretical explanation of Kepler's laws of motion of the planets based on his three laws of motion the basis of classical mechanics in his work Philosophiæ Naturalis Principia Mathematica (\"Mathematical Principles of Natural Philosophy\"), published in 1687.  The first law is a statement about the shape of the orbit, an ellipse, and that the sun is contained at one of the two foci, while the second law is a statement about the speed with which the planet moves around on the orbit. They improve the previous model Copernicus' model is published in his book De revolutionibus orbium coelestium (\"On the Revolutions of the Celestial Spheres\") in 1543. by Nicolaus Copernicus where a planetry orbits is a circle with the Sun at the center on which the planet moves with constant speed. The third law compares different planets to each other since it captures the relationship between the distance of planets from the Sun, and their orbital periods. We will look at the first and second law here.  The first law places the Sun at one of the foci of an ellipse which is the orbit of the planet. Mathematically, it is therefore useful to place one of the foci of the ellipse at the origin of the coordinate system, and, in fact, use polar coordinates to represent an ellipse. The formula of an ellipse in polar coordinates (i.e., with radial coordinate and angular coordinate ) where is the eccentricity and is the semi-lactus rectum of the ellipse (we explain the latter shortly). For the orbit of the Earth, one has , a value close to zero and thus Earth's orbit is almost a circle, and km. Using SageMath and polar_plot we can plot an accurate picture of the shape of Earth's orbit (the units on the axes are million km): The latus rectum is the chord A chord is a line segment joining two points on any curve, e.g., on the ellipse. parallel to the directrix (and thus prependicular to the major axis) and passing through one of the two foci; half of its length is called semi-lactus rectum which is therefore the distance from the foci to the point on the ellipse.   We note that from the eccentricity and the semi-lactus rectum one can calculate all the other parameters of the ellipse: The semi-major axis is given by , the semi-minor axis is given by , the linear eccentricity is given by etc. (in fact, given any two quantities, one can calculate the others).  Two points on a planetary orbit are of particular interest: The perihelion is the point on the orbit that is closest to the Sun, while the aphelion is the point that is farthest from the Sun. In polar coordinates they are located at and , respectively. One can therefore easily calculate the distances:  the distance Sun to perhelion is , and  the distance Sun to aphelion is .  Perihelion and aphelion are sometimes incorrectly used for the orbits of objects about bodies other than the Sun. The general terms for orbits around any center of mass (not just the Sun) are periapsis and apoapsis , respectively.  Some people wrongly believe that the seasons are due to this varying distance of the Earth to the Sun this is not the case. The seasons are due to the Earth's axial tilt Earth's tilt is also the reason for the tropics being between S and N, and the polar circles at S and N, respectively. of , which is the angle between the plane that contains the orbit of the Earth around the Sun and the plane through the equator of the Earth. By the conversation of angular momentum this tilt (essentially) stays the same as the Earth wanders around the Sun, thus the solstices (the shortest and longest day of the year around June 21st and December 21st) and the equinoxes (the days where night time and daylight have equal length all over Earth around March 21st and September 23rd) occur on specific points on Earth's orbit. the following picture shows the relationship between the perhelion (periapsis), the aphelion (apoapsis) and the seasonal dates (this picture is taken from here ).   As you can in this picture the perihelion (periapsis) falls on January 3rd, and thus almost on the winter solstice (December 21st). If the two events would coincide, then the two equinoxes would be given by the points on the ellipse connected by the latus rectum; in other words, in that case the equinoxes would be given by the points where the ellipse crosses the -axis in the first SageMath picture we plotted above. To make some of the calculations easier below, we will pretend that the two solstices coincide with the perihelion and the aphelion, respectively.  Let us now look at Kepler's second law, the statement about the speed of a planet around the Sun. It states that the \"area speed\" is constant. In equal times, the segment connecting the focus with the planet will sweep out equal areas and thus close to the perihelion the planet will move faster than close to the aphelion (i.e., the closer the planet is to the Sun, the faster it moves).   Can we calculate these areas? Luckily yes, and for this the above polar form of the ellipse is helpful again. Recall that areas can be calculated using integrals, so what integral do we have to calculate here? If you look at a very small angle , the area the corresponding segment sweeps out is approximately a circular sector of radius and thus has area Changing this now to an integral, the area swept out by travelling from polar angle to polar angle (measured with the focus at the origin) is SageMath can find the anti-derivative of : However, we will use the command numerical_integral to explore Kepler's second law further. If you use numerical_integral to evaluate integrals numerically, SageMath will return two numbers: The calculated numerical value of the integral, and the possible error made by calculating the integral not exact but by some numerical method. We will only be interested in the first number here.  It takes the Earth days to orbit once around the Sun (i.e., approximately, days, and therefore we have a leap year every years). Thus, on average, we expect that it takes the Earth slightly more than a day (namely, minutes) to sweep out an elliptical sector of center angle . However, near the perihelion the Earth will move faster than average, so it sweeps out such an angle of in less time, while near the aphelion the Earth will move slower and thus it will need more time to sweep out this angle.  We first calculate the total area of an ellipse with the same eccentricity than Earth's orbit (the semi-lactus rectum enters as a quadratic factor , thus we can simply set it equal to one for the moment). Since it is almost a circle, we almost get the value of here; the possible error is around and thus we can certainly trust this numerical calculation. The exact result is giving the same value.  We now calculate how long it takes the Earth to travel on its orbit, and then plot the result: As you can see, near the perihelion it takes the Earth less than a day to sweep out an elliptical sector with central angle of (close to which is minutes short of a full day), while near the aphelion (in summer) we need around minutes for the same angle.  Let us look at another consequence of Earth's elliptical orbit: If Earth's orbit would be a perfect circle, the two equinoxes would be exactly half a year apart. In our approximation, the spring equinox happens at polar angle , while the autumn equinox happens at polar angle . So, the combined time for spring and summer is proportional to while the combined time for autumn and winter is propoportional to By this consideration, we find that spring and summer combined last a total of i.e., approximately days. Correspondingly, autumn and winter last then a total of days, or approximately days less than spring and summer combined. Since the perihelion and the aphelion don't fall on the solstices, we actually got one day too much here, but we can acount for the days as follows: Since there are more months with days during the spring-summer months and winter also contains the short February, there are less days between September 21st and March 21st than the other way round; and since the equinox falls on September 23rd (and not September 21st), we gain another days for the difference between the spring-summer part vs. the autumn-winter part of the year. So the small eccentricity of the Earth's orbit already makes a difference of around a week when we maesure the time between subsequent equinoxes!   Kepler's laws of planetary motion also apply to other celestial bodies that wander around the sun, e.g., asteroids and comets. For example, Halley's Comet is a famous comet which orbits the Sun in years (its last perihelion was in 1986, the next one should be in mid-2061 track it here and you get a page with lots of information; if you do nothing else, at least scroll down to the \"Orbit Visualization\": Halley's Comet has recently passed its aphelion and is now slowly but increasingly speeding up towards the Sun again.) and was observed from the Earth since ancient times. The eccentricity of its orbit is . Note that Kepler's third law allows us to immediately calculate the semi-major axis of Halley's comet from the knowledge of Earth's semi-major axis: Its length is times the length of Earth's semi-major axis.  If this section made you interested in astronomy, visit the Harry Bailey Observatory of the Barbados Astronomical Society on a Friday night.  "
},
{
  "id": "sec-ellipse-astronomy-4",
  "level": "2",
  "url": "sec-ellipse-astronomy.html#sec-ellipse-astronomy-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "eccentricity semi-lactus rectum latus rectum chord chord semi-lactus rectum "
},
{
  "id": "sec-ellipse-astronomy-7",
  "level": "2",
  "url": "sec-ellipse-astronomy.html#sec-ellipse-astronomy-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "perihelion aphelion periapsis apoapsis "
},
{
  "id": "sec-ellipse-astronomy-8",
  "level": "2",
  "url": "sec-ellipse-astronomy.html#sec-ellipse-astronomy-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "tropics polar circles "
},
{
  "id": "sec-hyperbola-geogebra",
  "level": "1",
  "url": "sec-hyperbola-geogebra.html",
  "type": "Section",
  "number": "4.1",
  "title": "Hyperbola in GeoGebra",
  "body": " Hyperbola in GeoGebra   Drawing and Parts of a Hyperbola  In GeoGebra, we construct a hyperbola similar to the ellipse, i.e., we first choose two points, called the foci  and , together with a point on the hyperbola. We will thus proceed similar to the last section. In particular, it might be useful to choose the two foci and to lie on the -axis symmetrically around the origin. Again, the third point through which the hyperbola passes is only needed if we want to change the hyperbola. We note that the hyperbola actually consists of two curves, called the two branches of the hyperbola.  We use the same vocabulary as for ellipses: The midpoint between the two foci is called the center of the hyperbola. The intersection of the line through the foci and the hyperbola yield the two vertices of the hyperbola. We denote the distance from the center to a focus by , and the distance from the center to a vertex by (note that while for the ellipse we had ). If you constructed your hyperbola symmetrically around the origin, your foci should be have coordinates and , the center is at the origin and the vertices have coordinates and . As before, we call the (length of) the semi-major axis and the linear eccentricity .   We calculate, respectively construct, a number by , i.e., . Constructively, we get the number by drawing a circle of radius around the center (this circle will therefore pass through and ). The perpendicular line through one of the vertices, say the one with coordinates on the right, will intersect this circle at the points and (similarly, the the perpendicular line through the other vertex will yield the two points and of intersection with this circle). Now draw the two lines passing through the center (i.e., the origin here) and one of these points of intersection we just constructed here (they are the two black dash-diotted lines in the above picture): Can you figure out what their significance is?    Definition of a Hyperbola  Let us look at a geometrical definition of the hyperbola: Attach a point to the ellipse, and measure the distances and . Observe that as you move around the ellipse, the difference of the two distances is constant. How is this difference related to the length ?   A hyperbola is the locus of those points of the plane whose difference of distances to two fixed points and (the two foci of the hyperbola) is constant.    The eccentricity  of the hyperbola is given by , i.e., the ratio of the linear eccentricity to the semi-major axis. Since for a hyperbola, we have that the eccentricity is for any hyperbola. One can now proceed as we did for ellipses and construct a directrix for (each branch of) the hyperbola, and thus obtain a second geometrical definition of the hyperbola. However, we will skip this construction here.  Instead we will look at the definition of the hyperbola as an equidistant set . To this end, construct a circle around a vertex passing through its nearest focus, say . Intersecting this circle with the major axis (i.e., the -axis here) will give two points, namely, the focus itself and a point we call here. Now find the circle around the other focus passing through the point (note that the other focus is outside this circle), and check that the circle around passing through will always touch the previous circle in exactly one point (called in the next picture) no matter where is located on (the branch closest to of) the hyperbola. We thus have arrived at another geometrical definition of the hyperbola that you should be able to complete by yourself now.   A branch of the hyperbola is the equidistant set (or midset ) to      Parallel Curves to the Hyperbola  We now only consider the hyperbola with the two foci and together with a point on one of the branches of the hyperbola. Construct the tangent to the hyperbola at . We could again measure angles now (and would get similar results as before for the parabola and the ellipse), but let us look at something else here: the perpendicular line to the tangent through the point is called the normal . Get a slider with non-negative numbers, e.g., on the interval from to (or ). Use the number from the slider, call it , as radius of a circle around , and find the points of intersection of this circle and the normal. In the following picture, these points of intersection are called and .   Using and , we can now draw curves that are parallel to a branch of the hyperbola yes, we are generalizing the definition of \"parallel\" here: Set your radius to a certain value, then turn the \"Trace on\" for the point and\/or , and slowly move along the branch of the hyperbola. The points you trace out here, all have distance from the branch of the hyperbola and thus are on parallel curves to that branch. If you do this carefully for different values of , you will get a picture as below: To the outside of the branch of the hyperbola, you get the (green) curves that you should have expected, however, on the inside something more exciting is happening! From a certain value of onwards, the curves we are getting have \"kinks\". Draw a couple of curves for different values of  make a screenshot of your favorite picture you got here! ( Note: Unfortunetely, the \"trace\" functionality in GeoGebra can be a very fleeting construction one unintended move, and all the traces are gone! Thus it might be worth if you have the time to think about and then experiment with other ways to draw multiple parallel curves together.)     Evolute of a Hyperbola  Let us now return to a construction we also did for the parabola, namely, finding the evolute of (a branch of) the hyperbola. So, find the osculating circle to the hyperbola at the point . Then find the midpoint of that osculating circle. And finally \"trace\" out the curve this center moves about as you move the along the (branch of the) hyperbola. This is the evolute . Does the curve you are getting here look familiar?    "
},
{
  "id": "subsec-hyperbola-geogebra-intro-2",
  "level": "2",
  "url": "sec-hyperbola-geogebra.html#subsec-hyperbola-geogebra-intro-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "foci branches "
},
{
  "id": "subsec-hyperbola-geogebra-intro-3",
  "level": "2",
  "url": "sec-hyperbola-geogebra.html#subsec-hyperbola-geogebra-intro-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "center vertices semi-major axis linear eccentricity "
},
{
  "id": "def-hyperbola1",
  "level": "2",
  "url": "sec-hyperbola-geogebra.html#def-hyperbola1",
  "type": "Definition",
  "number": "4.1.1",
  "title": "",
  "body": " A hyperbola is the locus of those points of the plane whose difference of distances to two fixed points and (the two foci of the hyperbola) is constant.  "
},
{
  "id": "subsec-hyperbola-geogebra-definition-5",
  "level": "2",
  "url": "sec-hyperbola-geogebra.html#subsec-hyperbola-geogebra-definition-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "eccentricity directrix "
},
{
  "id": "def-hyperbola3",
  "level": "2",
  "url": "sec-hyperbola-geogebra.html#def-hyperbola3",
  "type": "Definition",
  "number": "4.1.2",
  "title": "",
  "body": " A branch of the hyperbola is the equidistant set (or midset ) to  "
},
{
  "id": "subsec-hyperbola-geogebra-parallel-2",
  "level": "2",
  "url": "sec-hyperbola-geogebra.html#subsec-hyperbola-geogebra-parallel-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "normal "
},
{
  "id": "subsec-hyperbola-geogebra-parallel-4",
  "level": "2",
  "url": "sec-hyperbola-geogebra.html#subsec-hyperbola-geogebra-parallel-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "parallel "
},
{
  "id": "subsec-hyperbola-geogebra-evolute-2",
  "level": "2",
  "url": "sec-hyperbola-geogebra.html#subsec-hyperbola-geogebra-evolute-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "evolute evolute "
},
{
  "id": "sec-hyperbola-astronomy",
  "level": "1",
  "url": "sec-hyperbola-astronomy.html",
  "type": "Section",
  "number": "4.2",
  "title": "Interstellar Visitor",
  "body": " Interstellar Visitor  On 19 October 2017, the Pan-STARRS 1 telescope in Hawai`i picked up a faint point of light moving across the sky. Initially thought to be a comet, it was reclassified as an asteroid a week later and astronomers got more and more exciting about this object. The International Astronomical Union even introduced a new designation, \" I \", for this astronomical object. Read about it in the following articles:  Small Asteroid or Comet 'Visits' from Beyond the Solar System ( 26 October 2017 )  Meet 'Oumuamua! The 1st Interstellar Visitor Ever Seen Gets a Name ( 15 November 2017 )  ESO Observations Show First Interstellar Asteroid is Like Nothing Seen Before ( 20 November 2017 )  Solar System's First Interstellar Visitor Dazzles Scientists ( 20 November 2017 )  Mysterious object confirmed to be from another solar system ( 20 November 2017 )  There is also a YouTube video in which some NASA scientists comment on this discovery.  Read (some) of the above articles and summarize in a short paragraph how the scientists know that the observed asteriod is an interstellar object.  "
},
{
  "id": "sec-hyperbola-hyp-trig",
  "level": "1",
  "url": "sec-hyperbola-hyp-trig.html",
  "type": "Section",
  "number": "4.3",
  "title": "Hyperbolic Trig Functions",
  "body": " Hyperbolic Trig Functions  We are all familiar with the trigonometric functions cosine, sine and tangent (to name the most prominent ones). There are also sometimes called circular functions because they can be defined on the unit circle. Besides these there is another \"family\" of functions called the hyperbolic trigonometric functions . In this section, we will explore these and contrast their properties to the usual trigonometric functions (we will call them circular trigonometric functions in the following to distinguish them from the hyperbolic trigonometric functions).  Let us start by looking at the graphs of the circular trigonometric functions. The hyperbolic trigonometric functions we would like to consider here are  the hyperbolic cosine denoted cosh(x) ,  the hyperbolic sine denoted sinh(x) , and  the hyperbolic tangent denoted tanh(x) .  Let us plot them in SageMath .   You should see that they look quite differently from the circular trigonometric functions. In particular, the hyperbolic tangent seems to have horizontal asymptotes as . We can check that this is indeed the case by calculating . In SageMath we can calculate this limit as follows: Again, you should now calculate in SageMath. Also calculate , , and (do you get what you expect? Simply replace the with the other functions, and the +oo with -oo ). What do you get if you replace the hyperbolic trigonometric functions with the circular trigonometric functions cosine, sine and tangent? Does this make sense?  In calculus, you calculate derivatives of the circular trigonometric functions, e.g. Hopefully SageMath gives you the expression here and not the far more useless expression involving the secant function that people seem to love memorizing! , Let us use SageMath to calculate the derivatives of the hyperbolic trigonometric functions. Can you make a table comparing the circular trigonometric functions and their derivatives with the hyperbolic trigonometric functions and their derivatives? From this table and the Fundamental Theorem of Calculus  it is immediate what the integrals\/anti-derivatives of the (hyperbolic or not) sine and cosine are (namely?). For the tangent, we get as anit-derivative note that this expression is missing a constant of integration that you should always include in your work, and that here denotes the natural logarithm that you usually might write as . We have included a full_simplify() in the above command to force SageMath to not(!) use the secant. What is an anti-derivative of the hyperbolic tangent?   Let us now turn our attention to definitions: For the tangent we have . For the hyperbolic tangent we similarly have , which we can confirm in the following plot: This leaves us with the definitions of the hyperbolic cosine and sine.  Let us begin by looking at the following parametric plot: This shows us that is a parametrization of the unit circle  . Thus the coordinates of any point on the circle can be expressed as for some value of .  In the introduction to this project, we mentioned that for some positive parameters describe hyperbolas. Let us consider the function now, and make a contour_plot of this function (you might want to consult the \"SageMath Lecture 2: Plotting in SageMath\" again for this). Add an implicit_plot to this contour plot that highlights the level set with equation ; this is the unit hyperbola . Finally, make a parametric plot similar to the one above, but with cosine and sine replaced by their hyperbolic counterparts (and choose the values for carefully).   You should see that is a parametrization of the unit hyperbola (more precisely, only part of it the left branch). Now there are many parametrizations of both the unit circle as well as the unit hyperbola, so what makes this one special? E.g., here is another parametrization of the unit circle: That is, also yields the unit circle (this parametrization turns out to be useful when one integrates functions containing trigonometric functions). The property that makes the parametrization useful is that there is an immediate interpretation of the parameter in this case:  it is the angle at the origin measured in radians, or, alternatively,  it is the length of the circular arc on the unit circle from the point to in counter-clockwise direction.  As a result, the trigonometric functions can all be defined on the unit circle (in fact, in two slightly different ways).    Instead of an angle (or arc length), the parameterization for the hyperbolic functions is related to an area . To motivate this, let us have a look at the unit circle again: The circular sector between the -axis and the segment connecting the origin with the point on the circle has area .   Now let us look at the similar area on the unit hyperbola:   What is the area of the shaded region here? This area is bounded by the straight line from the origin to the point (for a fixed value of ) on the hyperbola, the -axis and the unit hyperbola (what do you get if you make the subject?). We calculate this area in SageMath , and confirm that its value is (here, by checking that the straight line for coincides with the value of the integral\/value associated with the point ):   In fact, it turns out that the hyperbolic cosine and sine can be expressed using the exponential function as You might be familiar with corresponding formulae for the (circular) cosine and sine from Euler's formula (which one also uses, e.g., in the de Moivre's formula ), namely, . This leads to   Lastly, we note the following: The (circular) trig functions , and have an arc length on the unit circle as their argument thus, the proper With \"proper\" we want to stress that the notation , and , respectively, is for many reasons ill-advised. names of the inverse trig functions are , and , respectively. Similarly, the hyperbolic trig functions , and have an area on the unit hyperbola as their argument thus, the proper names of the inverse hyperbolic trig functions are , and , respectively, i.e., not an \"arc\" but only an \"ar\" (short for \"area\") as initial syllable.  "
},
{
  "id": "sec-hyperbola-hyp-trig-2",
  "level": "2",
  "url": "sec-hyperbola-hyp-trig.html#sec-hyperbola-hyp-trig-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "hyperbolic trigonometric functions "
},
{
  "id": "sec-hyperbola-hyp-trig-3",
  "level": "2",
  "url": "sec-hyperbola-hyp-trig.html#sec-hyperbola-hyp-trig-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "hyperbolic cosine hyperbolic sine hyperbolic tangent "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
