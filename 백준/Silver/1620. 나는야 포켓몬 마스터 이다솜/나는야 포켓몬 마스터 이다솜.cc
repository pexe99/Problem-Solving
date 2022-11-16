#include <iostream>
#include <map>
#include <string>
#include <vector>
#include <ctype.h>
using namespace std;

int N, M;
string name, command;
map<string, int> numberByName;
vector<string> nameByNumber(1, "");

int main() {
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	cin >> N >> M;

	for (int i = 0; i < N; i++) {
		cin >> name;
		numberByName.insert({name, i + 1});
		nameByNumber.push_back(name);
	}

	for (int i = 0; i < M; i++) {
		cin >> command;
		if (isdigit(command[0])) cout << nameByNumber[stoi(command)] << "\n";
		else cout << numberByName[command] << "\n";
	}
}