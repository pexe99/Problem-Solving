#include <iostream>
using namespace std;

int A, B, V, day, cur;

int main() {
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	cin >> A >> B >> V;
	day = (V - A) / (A - B);
	if (day * (A - B) + A >= V) {
		cout << day + 1 << "\n";
	}
	else {
		cout << day + 2 << endl;
	}
}