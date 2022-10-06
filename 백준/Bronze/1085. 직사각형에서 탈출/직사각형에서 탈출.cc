#include <iostream>
#include <algorithm>
using namespace std;

int main() {
	int x, y, w, h;
	cin >> x >> y >> w >> h;
	int xmin = min(x, w - x);
	int ymin = min(y, h - y);
	cout << min(xmin, ymin) << "\n";
}